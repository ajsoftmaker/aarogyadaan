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
import com.aarogyadan.db.EventDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Event;
import com.aarogyadan.utils.JsonUtils;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/events")
@Produces(MediaType.APPLICATION_JSON)
public class EventsResource {
	private final EventDAO eventDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(EventsResource.class.getName());

	public EventsResource(EventDAO dao, AarogyadanUserDAO userDAO) {
		this.eventDAO = dao;
		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listEvents() {
		try {
			logger.info(" In listEvents");
			return Response.status(Status.OK).entity(JsonUtils.getJson(eventDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Events " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Events"))
					.build();
		}
	}
	
	@POST
	@UnitOfWork
	public Response createEvent(@Auth LoginUser auth, Event event) {
		Response response = null;
		try {
			logger.info(" In create Events");
			eventDAO.create(event);
			return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Event Created Successfully")).build();
		} catch (Exception e) {
			logger.severe("Unable to Create Event " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Event"))
					.build();
		}
	}
}
