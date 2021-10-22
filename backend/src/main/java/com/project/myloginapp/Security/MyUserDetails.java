package com.project.myloginapp.Security;

import com.project.myloginapp.Model.MyCustomUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MyUserDetails implements UserDetails {
    private MyCustomUser myCustomUser;

    public MyUserDetails(MyCustomUser myCustomUser) {
        this.myCustomUser = myCustomUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("USER"));
        return authorities;
    }

    @Override
    public String getPassword() {
        return myCustomUser.getPassword();
    }

    @Override
    public String getUsername() {
        return myCustomUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return myCustomUser.isEnabled();
    }

    @Override
    public String toString() {
        return "MyCustomUserDetails{" +
                "myCustomUser=" + myCustomUser +
                '}';
    }
    public String getName()
    {
        return myCustomUser.getName();
    }
    public String getPhone()
    {
        return myCustomUser.getPhone();
    }
    public void setNamePhone(String name,String phone)
    {
        myCustomUser.setName(name);
        myCustomUser.setPhone(phone);
    }
    public MyCustomUser getMyCustomUser()
    {
        return myCustomUser;
    }
}
