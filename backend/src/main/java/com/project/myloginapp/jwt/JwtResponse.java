package com.project.myloginapp.jwt;

public class JwtResponse {
    private String email;
    private String name;
    private String phone;
    private boolean enabled;
    private String token;

    public JwtResponse() {
    }

    public JwtResponse(String email, String name, String phone, boolean enabled, String token) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.enabled = enabled;
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
