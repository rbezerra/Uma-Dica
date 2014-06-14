package com.rbezerra.umadica.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Client {

	@Id protected String id;
	private String name;
	private Date birthdate;
	private String email;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
