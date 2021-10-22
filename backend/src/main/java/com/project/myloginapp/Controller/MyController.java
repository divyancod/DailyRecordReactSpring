package com.project.myloginapp.Controller;

import com.project.myloginapp.Exceptions.UserAlreadyExists;
import com.project.myloginapp.Exceptions.UserNotFound;
import com.project.myloginapp.Model.DailyRecord;
import com.project.myloginapp.Model.GlobalResponse;
import com.project.myloginapp.Model.UpdateResponse;
import com.project.myloginapp.Security.MyUserDetails;
import com.project.myloginapp.Security.MyUserDetailService;
import com.project.myloginapp.Service.DailyRecordRepo;
import com.project.myloginapp.UpdateModel;
import com.project.myloginapp.jwt.JwtResponse;
import com.project.myloginapp.jwt.JwtUtils;
import com.project.myloginapp.Model.MyCustomUser;
import com.project.myloginapp.Service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = {"*"}, allowedHeaders = {"*"})
public class MyController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    MyUserDetailService myUserDetailService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    DailyRecordRepo recordRepo;

    @GetMapping("/signup")
    public ResponseEntity<GlobalResponse> signUp(@RequestParam("name") String name, @RequestParam("email") String email, @RequestParam("password") String password) throws UserAlreadyExists {
        MyCustomUser user = userRepository.getMyCustomUserByUsername(email);
        MyCustomUser myCustomUser;
        if (user == null) {
            myCustomUser = userRepository.save(new MyCustomUser(email, passwordEncoder.encode(password), true, name, ""));
        } else {
            throw new UserAlreadyExists("User already exists");
        }
        MyUserDetails myUserDetails = new MyUserDetails(myCustomUser);
        final String token = jwtUtils.generateToken(myUserDetails);
        final JwtResponse jwtResponse = new JwtResponse(email, name, myUserDetails.getPhone(), true, token);
        return new ResponseEntity<>(new GlobalResponse(false, "success", jwtResponse), HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity<GlobalResponse> loginUser(@RequestParam("email") String email, @RequestParam("password") String password) throws Exception {
        {
            try {
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            } catch (BadCredentialsException e) {
                throw new UserNotFound("User not found");
            }
            final MyCustomUser details = userRepository.getMyCustomUserByUsername(email);
            MyUserDetails myUserDetails = new MyUserDetails(details);
            final String token = jwtUtils.generateToken(myUserDetails);
            final JwtResponse jwtResponse = new JwtResponse(email, myUserDetails.getName(), myUserDetails.getPhone(), true, token);
            return new ResponseEntity<>(new GlobalResponse(false, "success", jwtResponse), HttpStatus.OK);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<?> userList() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails myUserDetails = (MyUserDetails) authentication.getPrincipal();
        System.out.println(myUserDetails.toString());
        return new ResponseEntity<>("Accepted", HttpStatus.OK);
    }

    @PostMapping(value = "/update-details", headers = "Accept=application/json")
    public ResponseEntity<?> updateDetails(@RequestBody UpdateModel updateModel) {
        System.out.println(updateModel.getName() + "  " + updateModel.getPhone());
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails myUserDetails = (MyUserDetails) authentication.getPrincipal();
        myUserDetails.setNamePhone(updateModel.getName(), updateModel.getPhone());
        userRepository.save(myUserDetails.getMyCustomUser());
        UpdateResponse updateResponse = new UpdateResponse(myUserDetails.getName(), myUserDetails.getUsername(), myUserDetails.getPhone(), myUserDetails.isEnabled());
        return new ResponseEntity<>(new GlobalResponse(false, "success", updateResponse), HttpStatus.OK);
    }

    @PostMapping("/test-api")
    public ResponseEntity<?> testApi() {
        return new ResponseEntity<>(new GlobalResponse(false, "success", null), HttpStatus.OK);
    }

    @GetMapping("/test-api-2")
    public ResponseEntity<?> testApi2() {
        return new ResponseEntity<>(new GlobalResponse(false, "success", "THIS IS A SUCCESS MESSAGE"), HttpStatus.OK);
    }

    @PostMapping(value = "/save-post", headers = "Accept=application/json")
    public ResponseEntity<?> savePost(@RequestBody DailyRecord dailyRecord) {
        recordRepo.save(dailyRecord);
        return new ResponseEntity<>(new GlobalResponse(false, "success", "Post saved successfully"), HttpStatus.OK);
    }
    @GetMapping("/get-all-posts")
    public ResponseEntity<?> getAllPost()
    {
        return new ResponseEntity<>(new GlobalResponse(false,"success",recordRepo.findALlByOrderByIdDesc()),HttpStatus.OK);
    }
}