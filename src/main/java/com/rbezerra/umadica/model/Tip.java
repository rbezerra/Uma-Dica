/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rbezerra.umadica.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author rbezerra
 */


public class Tip {
    
    @Id
    protected String id;
    
  
    private Movie filme;
    private boolean curtiu;
    private Date data;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Movie getFilme() {
        return filme;
    }

    public void setFilme(Movie filme) {
        this.filme = filme;
    }

    public boolean isCurtiu() {
        return curtiu;
    }

    public void setCurtiu(boolean curtiu) {
        this.curtiu = curtiu;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Tip{" + "id=" + id + ", filme=" + filme.toString() + ", curtiu=" + curtiu + ", data=" + data + '}';
    }
    
    
    
    
}
