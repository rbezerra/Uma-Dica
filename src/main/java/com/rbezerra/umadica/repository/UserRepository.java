/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.rbezerra.umadica.repository;

import com.rbezerra.umadica.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author rbezerra
 */

public interface UserRepository extends MongoRepository<User, String>{


}
