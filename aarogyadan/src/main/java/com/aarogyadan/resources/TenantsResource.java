package com.aarogyadan.resources;

import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.aarogyadan.db.AarogyadanUserDAO;
import com.aarogyadan.db.TenantDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Tenant;
import com.aarogyadan.utils.JsonUtils;
import com.aarogyadan.utils.MailUtils;
import com.aarogyadan.utils.SendMail;
import com.aarogyadan.utils.Utils;
import com.google.gson.JsonObject;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/tenants")
@Produces(MediaType.APPLICATION_JSON)
public class TenantsResource {
	private final TenantDAO tenantDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(TenantsResource.class.getName());

	public TenantsResource(TenantDAO dao, AarogyadanUserDAO userDAO) {
		this.tenantDAO = dao;
		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listTenants(@Auth LoginUser authUser) {
		try {
			logger.info(" In list Team Members");
			return Response.status(Status.OK).entity(JsonUtils.getJson(tenantDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Team Members " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Team Members"))
					.build();
		}
	}

	@POST
	@UnitOfWork
	public Response createTenant(@Auth LoginUser auth, Tenant tenant) {
		Response response = null;
		LoginUser userObj;
		try {
			logger.info(" In create Team Member");
			userObj = userDAO.findByEmailWithRole(tenant.getTenantEmail(), LoginUser.TENANTADMIN);
			if (userObj == null) {
				Tenant tenantObject = tenantDAO.findByEmail(tenant.getTenantEmail());
				if (tenantObject == null) {
					tenant.setTenantStatus("0");
					String loginId = tenant.getTenantEmail();
					JsonObject jsonObj = MailUtils.getActivationMail(tenant.getTenantEmail(), loginId,
							LoginUser.TENANTADMIN);
					try {
						Thread t = new Thread(new SendMail(jsonObj));
						t.start();
						response = tenantDAO.create(tenant);
						Tenant tenantExistObject = tenantDAO.findByEmail(tenant.getTenantEmail());
						if (response.getStatus() == 200 && tenantExistObject != null) {
							String email = tenantExistObject.getTenantEmail();
							LoginUser loginUser = new LoginUser();
							loginUser.setLoginID(loginId);
							loginUser.setPassword(Utils.encodeBase64("admin"));
							loginUser.setUserRole(LoginUser.TENANTADMIN);
							loginUser.setTenant_id(tenantExistObject.getId());
							loginUser.setEmail(email);
							loginUser.setStatus("0");
							userDAO.create(loginUser);
							return Response.status(Status.OK)
									.entity(JsonUtils.getSuccessJson("Team Member Created Successfully")).build();
						} else {
							return Response.status(Status.BAD_REQUEST)
									.entity(JsonUtils.getErrorJson("Unable to Create Team Member")).build();
						}
					} catch (Exception e) {
						logger.info("Unable To Create Team Member : " + e);
						return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson(e.getMessage()))
								.build();
					}

				} else {
					logger.severe("Unable to Create Team Member, Team Member Already Exists");
					return Response.status(Status.BAD_REQUEST)
							.entity(JsonUtils.getErrorJson("Unable to Create Team Member, Team Member Already Exists")).build();
				}
			} else {
				logger.severe("Email already Registered. Use different Email ID");
				return Response.status(Status.BAD_REQUEST)
						.entity(JsonUtils.getErrorJson(" Email already Registered. Use different Email ID")).build();
			}

		} catch (Exception e) {
			logger.severe("Unable to Create Team Member " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Team Member"))
					.build();
		}
	}
}
