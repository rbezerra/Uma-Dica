package com.rbezerra.umadica.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rbezerra.umadica.model.Client;

public interface ClientRepository extends MongoRepository<Client, String> {

}
