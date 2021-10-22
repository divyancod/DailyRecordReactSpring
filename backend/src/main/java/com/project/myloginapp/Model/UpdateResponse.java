package com.project.myloginapp.Model;

public class UpdateResponse {
    private String name;
    private String email;
    private String phone;
    private boolean enabled;

    public UpdateResponse() {
    }

    public UpdateResponse(String name, String email, String phone, boolean enabled) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.enabled = enabled;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
}
