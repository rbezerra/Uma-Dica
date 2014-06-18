/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rbezerra.umadica.model;

import java.util.Date;
import org.springframework.data.annotation.Id;

/**
 *
 * @author rbezerra
 */


public class Tip {
    
    @Id
    protected String id;
    
    private Movie movie;
    private String date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Movie getFilme() {
        return movie;
    }

    public void setFilme(Movie filme) {
        this.movie = filme;
    }

    public String getData() {
        return date;
    }

    public void setData(String Data) {
        this.date = Data;
    }

    @Override
    public String toString() {
        return "Tip{" + "id=" + id + ", filme=" + movie.toString() + ", data=" + date + '}';
    }
    
    
    
    
}
