package com.aarogyadan.resources;

import java.util.logging.Logger;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import com.aarogyadan.db.AarogyadanUserDAO;
import com.aarogyadan.db.FeedbackDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Feedback;
import com.aarogyadan.utils.JsonUtils;
import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/feedback/{feedbackid}")
@Produces(MediaType.APPLICATION_JSON)
public class FeedbackResource {
	private final FeedbackDAO feedbackDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(FeedbackResource.class.getName());

	public FeedbackResource(FeedbackDAO dao, AarogyadanUserDAO userDAO) {
		this.feedbackDAO = dao;
		this.userDAO = userDAO;
	}

	@GET
	@UnitOfWork
	public Response findFeedback(@Auth LoginUser authUser ,@PathParam("feedbackid") long feedbackid) {
		try {
			logger.info(" In findFeedback");
			if(authUser != null) {
				return Response.status(Status.OK).entity(JsonUtils.getJson(feedbackDAO.findById(feedbackid))).build();
			} else {
				return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Authorization Failed")).build();
			}
		} catch (Exception e) {
			logger.severe("Unable to Find Feedback " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find Feedback")).build();
		}
	}

	@DELETE
	@UnitOfWork
	public Response deleteFeedback(@Auth LoginUser authUser ,@PathParam("feedbackid") long feedbackid) {
		try {
			logger.info(" In deleteFeedback");
			if(authUser .getId() == 0) {
				feedbackDAO.delete(feedbackid);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Feedback Deleted Successfully")).build();
			}else {
				return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Authorization Failed")).build();
			}
		} catch (Exception e) {
			logger.severe("Unable to Delete Feedback " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Delete Feedback")).build();
		}
	}

	@PUT
	@UnitOfWork
	public Response updateFeedback(@Auth LoginUser authUser , Feedback feedback) {
		try {
			logger.info(" In updateFeedback");
			if(authUser.getId() == 0) {
				feedbackDAO.update(feedback);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Feedback updated successfully")).build();
			} else {
				return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Authorization Failed")).build();
			}
		} catch (Exception e) {
			logger.severe("Unable to Update Feedback " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Update Feedback")).build();
		}
	}

}
