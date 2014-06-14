package com.rbezerra.umadica.controller;

import static br.com.caelum.vraptor.view.Results.json;
import static br.com.caelum.vraptor.view.Results.status;

import java.util.List;

import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;

import com.rbezerra.umadica.model.Client;
import com.rbezerra.umadica.repository.ClientRepository;

@Resource
@Path("/client")
public class ClientController {
	
	private final ClientRepository repository;
	private final Result result;
	
	public ClientController(final ClientRepository repository, final Result result) {
		this.repository = repository;
		this.result = result;
	}

	@Post
	@Path("/")
	public void save(final Client client) {
		this.repository.save(client);
		
		this.result.use(json()).withoutRoot().from(client).serialize();
	}
	
	@Post
	@Path("/{id}")
	public void update(final Client client) {
		this.repository.save(client);
		
		this.result.use(json()).withoutRoot().from(client).serialize();
	}
	
	@Delete
	@Path("/{id}")
	public void delete(final String id) {
		this.repository.delete(id);
		
		this.result.use(status()).ok();
	}
	
	@Get
	@Path("/")
	public void findAll(final String id) {
		final List<Client> clients = this.repository.findAll();
		
		this.result.use(json()).withoutRoot().from(clients).serialize();
	}
	
	@Get
	@Path("/{id}")
	public void find(final String id) {
		final Client client = this.repository.findOne(id);
		
		this.result.use(json()).withoutRoot().from(client).serialize();
	}
}

