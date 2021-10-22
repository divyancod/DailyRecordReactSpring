package com.project.myloginapp.Service;

import com.project.myloginapp.Model.DailyRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DailyRecordRepo extends JpaRepository<DailyRecord,Integer> {
    List<DailyRecord> findALlByOrderByIdDesc();
}
