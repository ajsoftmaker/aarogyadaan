package com.aarogyadan.auth;

import org.hibernate.SessionFactory;

import com.aarogyadan.entity.LoginUser;

import java.util.Optional;
import java.util.logging.Logger;

import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.auth.basic.BasicCredentials;

public class AarogyadanAuthenticator implements Authenticator<BasicCredentials, LoginUser> {
	private SessionFactory factory = null;
	private final Logger logger = Logger.getLogger(AarogyadanAuthenticator.class.getName());

	public AarogyadanAuthenticator(SessionFactory factory) {
		this.factory = factory;
		
	}

	@Override
	public Optional<LoginUser> authenticate(BasicCredentials credentials) throws AuthenticationException {

		try {
			String token = credentials.getUsername();
			LoginUser userObj = JwtToken.decryptPayload(token);
			return Optional.of(userObj);

		} catch (Exception e) {
			logger.info("Unable to authenticate user :" + e);
		}
		return Optional.empty();
	}
}
