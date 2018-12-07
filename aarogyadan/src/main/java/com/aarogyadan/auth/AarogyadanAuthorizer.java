package com.aarogyadan.auth;

import com.aarogyadan.entity.LoginUser;

import io.dropwizard.auth.Authorizer;

public class AarogyadanAuthorizer implements Authorizer<LoginUser> {

    @Override
    public boolean authorize(LoginUser user, String role) {
    	if (user.isUserInRole(role))
			return true;

		return false;
    }
}
