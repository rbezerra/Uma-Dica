/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rbezerra.umadica.controller;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import static br.com.caelum.vraptor.view.Results.json;
import static br.com.caelum.vraptor.view.Results.status;
import com.rbezerra.umadica.model.User;
import com.rbezerra.umadica.repository.UserRepository;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author rbezerra
 */
@Resource
@Path("/users")
public class UserController {

    private final UserRepository repository;
    private final Result result;

    public UserController(final UserRepository repository, final Result result) {
        this.repository = repository;
        this.result = result;
    }

    @Post
    @Path("/")
    @Consumes("application/json")
    public void save(User user) {
        try {
            this.repository.save(user);
        }catch(Exception e){
            System.err.println(Arrays.toString(e.getStackTrace()));
        }
        
        this.result.use(status()).ok();
    }

    @Put
    @Path("/")
    @Consumes("application/json")
    public void update(User user) {
        this.repository.save(user);

        this.result.use(status()).ok();
    }

    @Delete
    @Path("/{id}")
    public void delete(String id) {
        this.repository.delete(id);

        this.result.use(status()).ok();
    }

    @Get
    @Path("/{id}")
    public void find(String id) {
        
        final User user = this.repository.findOne(id);

        this.result.use(json()).withoutRoot().from(user).recursive().serialize();
    }

    @Get
    @Path("/")
    public void findAll() {

        final List<User> users = this.repository.findAll();

        this.result.use(json()).withoutRoot().from(users).recursive().serialize();
    }

}
