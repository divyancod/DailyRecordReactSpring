package com.project.myloginapp.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "users")
public class MyCustomUser {
    @Id
    private String username;
    private String password;
    private boolean enabled;
    private String name;
    private String phone;

    public MyCustomUser() {
    }

    public MyCustomUser(String username, String password, boolean enabled, String name, String phone) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.name = name;
        this.phone = phone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isEnabled() {
        return enabled;
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


    @Override
    public String toString() {
        return "MyCustomUser{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
