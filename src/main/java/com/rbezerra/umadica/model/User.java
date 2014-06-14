/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rbezerra.umadica.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author rbezerra
 */

@Document(collection="Users")
public class User {

    public User() {
    } 
    @Id
    protected String id;
    
    @Indexed(unique = true)
    protected String email;
    private String name;
    private Tip [] dicas;


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

    public Tip[] getDicas() {
        return dicas;
    }

    public void setDicas(Tip[] dicas) {
        this.dicas = dicas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", email=" + email + ", name=" + name + ", dicas=" + dicas + '}';
    }
    
    
    
}
