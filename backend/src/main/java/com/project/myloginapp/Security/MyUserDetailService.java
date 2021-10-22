package com.project.myloginapp.Security;

import com.project.myloginapp.Model.MyCustomUser;
import com.project.myloginapp.Service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Override
    public MyUserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        MyCustomUser myCustomUser = userRepository.getMyCustomUserByUsername(s);
        if(myCustomUser==null)
            throw new UsernameNotFoundException("User Not Found");
        return new MyUserDetails(myCustomUser);
    }
}
