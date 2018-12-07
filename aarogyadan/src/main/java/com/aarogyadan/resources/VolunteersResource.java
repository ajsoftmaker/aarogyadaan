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
import com.aarogyadan.db.VolunteerDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Volunteer;
import com.aarogyadan.utils.JsonUtils;
import com.aarogyadan.utils.MailUtils;
import com.aarogyadan.utils.SendMail;
import com.aarogyadan.utils.Utils;
import com.google.gson.JsonObject;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/volunteers")
@Produces(MediaType.APPLICATION_JSON)
public class VolunteersResource {
	private final VolunteerDAO volunteerDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(VolunteersResource.class.getName());

	public VolunteersResource(VolunteerDAO dao, AarogyadanUserDAO userDAO) {
		this.volunteerDAO = dao;
		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listVolunteers() {
		try {
			logger.info(" In listVolunteers");
			return Response.status(Status.OK).entity(JsonUtils.getJson(volunteerDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Volunteers " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Volunteers"))
					.build();
		}
	}

	@POST
	@UnitOfWork
	public Response createVolunteer(@Auth LoginUser auth, Volunteer volunteer) {
		Response response = null;
		try {
			logger.info(" In create Volunteer");
			Volunteer volunteerObject = volunteerDAO.findByEmail(volunteer.getVolunteerEmail());
			if (volunteerObject == null) {
				volunteer.setVolunteerStatus("0");
				response = volunteerDAO.create(volunteer);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Volunteer Created Successfully")).build();
			} else {
				logger.severe("Email already Registered. Use different Email ID");
				return Response.status(Status.BAD_REQUEST)
						.entity(JsonUtils.getErrorJson(" Email already Registered. Use different Email ID")).build();
			}

		} catch (Exception e) {
			logger.severe("Unable to Create Volunteer " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Volunteer"))
					.build();
		}
	}
}
