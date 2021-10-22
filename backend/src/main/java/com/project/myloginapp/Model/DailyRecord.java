package com.project.myloginapp.Model;

import javax.persistence.*;

@Entity(name = "dailyrecords")
public class DailyRecord {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(insertable = false)
    private int id;
    @Column
    private String title;
    @Lob
    private String body;

    public DailyRecord() {
    }

    public DailyRecord(int id, String title, String body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public String toString() {
        return "DailyRecord{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", body='" + body + '\'' +
                '}';
    }
}
