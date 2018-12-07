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
import com.aarogyadan.db.BlogDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Blog;
import com.aarogyadan.utils.JsonUtils;
import com.aarogyadan.utils.MailUtils;
import com.aarogyadan.utils.SendMail;
import com.aarogyadan.utils.Utils;
import com.google.gson.JsonObject;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/blogs")
@Produces(MediaType.APPLICATION_JSON)
public class BlogsResource {
	private final BlogDAO blogDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(BlogsResource.class.getName());

	public BlogsResource(BlogDAO dao, AarogyadanUserDAO userDAO) {
		this.blogDAO = dao;
		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listBlogs() {
		try {
			logger.info(" In listBlogs");
			return Response.status(Status.OK).entity(JsonUtils.getJson(blogDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Blogs " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Blogs"))
					.build();
		}
	}
	
	@POST
	@UnitOfWork
	public Response createBlog(@Auth LoginUser auth, Blog blog) {
		Response response = null;
		try {
			logger.info(" In create Blogs");
			blogDAO.create(blog);
			return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Blog Created Successfully")).build();
		} catch (Exception e) {
			logger.severe("Unable to Create Blog " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Blog"))
					.build();
		}
	}
}
