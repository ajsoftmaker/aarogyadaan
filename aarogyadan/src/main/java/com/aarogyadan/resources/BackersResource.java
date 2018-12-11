package com.aarogyadan.resources;

import java.io.InputStream;
import java.util.logging.Logger;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
//import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import com.aarogyadan.db.BackerDAO;
import com.aarogyadan.entity.Backer;
import com.aarogyadan.utils.JsonUtils;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/backers")
@Produces(MediaType.APPLICATION_JSON)
public class BackersResource {
	private final BackerDAO backerDAO;
//	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(BackersResource.class.getName());

	public BackersResource(BackerDAO dao) {
		this.backerDAO = dao;
//		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listBackers() {
		try {
			logger.info(" In listBackers");
			return Response.status(Status.OK).entity(JsonUtils.getJson(backerDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Backers " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Backers"))
					.build();
		}
	}

	@POST
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@UnitOfWork
	@Produces(MediaType.APPLICATION_JSON)
	public Response createBacker(Backer backer,@FormDataParam("logofile") InputStream is,
			@FormDataParam("logofile") FormDataContentDisposition fileDetail) {
		Response response = null;
		try {
//			Backer backer = new Backer();
			logger.info(" In create Backer");
			Backer backerObject = backerDAO.findByEmail(backer.getBackerEmail());
			if (backerObject == null) {
				if (fileDetail.getFileName() != null) {
					byte[] imageByteValue = IOUtils.toByteArray(is);
					backer.setBackerImage(imageByteValue);
				}
				response = backerDAO.create(backer);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Backer Created Successfully")).build();
			} else {
				logger.severe("Email already Registered. Use different Email ID");
				return Response.status(Status.BAD_REQUEST)
						.entity(JsonUtils.getErrorJson(" Email already Registered. Use different Email ID")).build();
			}

		} catch (Exception e) {
			logger.severe("Unable to Create Backer " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Backer"))
					.build();
		}
	}
}
