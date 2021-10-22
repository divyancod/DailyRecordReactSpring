package com.project.myloginapp.Service;

import com.project.myloginapp.Model.MyCustomUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<MyCustomUser, String> {
    MyCustomUser getMyCustomUserByUsername(String username);
}
