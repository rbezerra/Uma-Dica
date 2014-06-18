/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rbezerra.umadica.model;

import org.springframework.data.mongodb.core.index.Indexed;

/**
 *
 * @author rbezerra
 */


public class Movie {
        
    @Indexed
    protected String imdbID;
    
    private String Title;
    private String Director;
    private String Year;
    private Double imdbRating;
    private String Plot;
    private String Actors;

    public String getImdbID() {
        return imdbID;
    }

    public void setImdbID(String imdbID) {
        this.imdbID = imdbID;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        this.Title = title;
    }

    public String getDirector() {
        return Director;
    }

    public void setDirector(String director) {
        this.Director = director;
    }

    public String getYear() {
        return Year;
    }

    public void setYear(String year) {
        this.Year = year;
    }

    public Double getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(Double imdbRating) {
        this.imdbRating = imdbRating;
    }

    public String getPlot() {
        return Plot;
    }

    public void setPlot(String plot) {
        this.Plot = plot;
    }

    public String getActors() {
        return Actors;
    }

    public void setActors(String actors) {
        this.Actors = actors;
    }

    @Override
    public String toString() {
        return "Movie{" + "imdbID=" + imdbID + ", title=" + Title + ", director=" + Director + ", year=" + Year + ", imdbRating=" + imdbRating + ", plot=" + Plot + ", actors=" + Actors + '}';
    }
    
    

    
    
    
    
}
