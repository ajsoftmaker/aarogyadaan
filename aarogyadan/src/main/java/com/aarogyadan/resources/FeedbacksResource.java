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
import com.aarogyadan.db.FeedbackDAO;
import com.aarogyadan.entity.Feedback;
import com.aarogyadan.utils.JsonUtils;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/feedbacks")
@Produces(MediaType.APPLICATION_JSON)
public class FeedbacksResource {
	private final FeedbackDAO feedbackDAO;
	private final Logger logger = Logger.getLogger(FeedbacksResource.class.getName());

	public FeedbacksResource(FeedbackDAO dao) {
		this.feedbackDAO = dao;
	}

	@GET
	@UnitOfWork
	public Response listFeedbacks() {
		try {
			logger.info(" In listFeedbacks");
			return Response.status(Status.OK).entity(JsonUtils.getJson(feedbackDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Feedbacks " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Feedbacks"))
					.build();
		}
	}
	
	@POST
	@UnitOfWork
	public Response createFeedback(Feedback feedback) {
		Response response = null;
		try {
			logger.info(" In create Feedbacks");
			feedbackDAO.create(feedback);
			return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Feedback Created Successfully")).build();
		} catch (Exception e) {
			logger.severe("Unable to Create Feedback " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Feedback"))
					.build();
		}
	}
}
