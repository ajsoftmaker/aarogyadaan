package com.aarogyadan.db;

import java.util.List;
import javax.ws.rs.core.Response;
import org.hibernate.SessionFactory;

import com.aarogyadan.entity.Tenant;

import io.dropwizard.hibernate.AbstractDAO;

public class TenantDAO extends AbstractDAO<Tenant> {

	public TenantDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Tenant> findAll() {
		return list(namedQuery("com.aarogyadan.entity.Tenant.findAll"));
	}

	public Response create(Tenant tenant) {
		Response response = null;
		Tenant getTenant = findByEmail(tenant.getTenantEmail());
		if (getTenant != null) {
			response = Response.notModified("A member with this code already exists").build();
		} else {
			persist(tenant);
			response = Response.ok().build();
		}
		return response;
	}


	public Tenant update(Tenant tenant) {
		return persist(tenant);
	}

	public Tenant findById(long tenantID) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Tenant.findById").setParameter("id", tenantID));
	}

	public Tenant findByEmail(String email) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Tenant.findByEmail").setParameter("tenantEmail", email));
	}

	public void delete(long tenantID) {
		currentSession().delete(findById(tenantID));
	}
}
