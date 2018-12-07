package com.aarogyadan.db;

import java.util.List;
import org.hibernate.SessionFactory;

import com.aarogyadan.entity.LoginUser;

import io.dropwizard.hibernate.AbstractDAO;

public class AarogyadanUserDAO extends AbstractDAO<LoginUser> {

	public AarogyadanUserDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public LoginUser create(LoginUser user) {
		return persist(user);
	}

	public List<LoginUser> findByLoginID(String userloginID) {
		return list(namedQuery("com.aarogyadan.entity.LoginUser.findByuserloginID")
				.setParameter("userloginID", userloginID));
	}

	public LoginUser update(LoginUser user) {
		return persist(user);
	}

	public List<LoginUser> findByEmail(String email) {
		return list(namedQuery("com.aarogyadan.entity.LoginUser.findByEmail")
				.setParameter("email", email));
	}

	public LoginUser findByEmailWithRole(String email, String role) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.LoginUser.findByEmailWithRole")
				.setParameter("email", email).setParameter("userRole", role));

	}

	public List<LoginUser> findStudentsByTenantID(long tenantID) {
		return list(namedQuery("com.aarogyadan.entity.LoginUser.findStudentsByTenantID")
				.setParameter("tenant_id", tenantID)
				.setParameter("userRole", LoginUser.STUDENT));
	}

	public List<LoginUser> findUserByLoginIdAndPassword(String userloginID, String password) {
		return list(namedQuery("com.aarogyadan.entity.LoginUser.findUserByLoginIdAndPassword")
				.setParameter("userloginID", userloginID)
				.setParameter("password",password));
	}
}
