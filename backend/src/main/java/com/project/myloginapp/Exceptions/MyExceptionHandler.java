package com.project.myloginapp.Exceptions;

import com.project.myloginapp.Model.GlobalResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MyExceptionHandler {
    @ExceptionHandler(UserNotFound.class)
    public ResponseEntity<?> userNotFound() {
        return new ResponseEntity<>(new GlobalResponse(true, "Invalid login credentials", null), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(UserAlreadyExists.class)
    public ResponseEntity<?> userAlreadyExists() {
        return new ResponseEntity<>(new GlobalResponse(true, "User already exists", null), HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<?> handleMissingParams(MissingServletRequestParameterException ex) {
        return new ResponseEntity<>(new GlobalResponse(true, ex.getParameterName()+" parameter is missing", null), HttpStatus.BAD_REQUEST);
    }
}
