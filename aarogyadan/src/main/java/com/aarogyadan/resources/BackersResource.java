package com.aarogyadan.resources;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.logging.Logger;

import javax.servlet.http.*;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import com.aarogyadan.db.BackerDAO;
import com.aarogyadan.entity.Backer;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Patient;
import com.aarogyadan.utils.JsonUtils;
import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;


@Path("/backers")
@Produces(MediaType.APPLICATION_JSON)
public class BackersResource {
	private final BackerDAO backerDAO;
//	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(BackersResource.class.getName());
	private static String UPLOADS_DIR = "/aarogyadan/src/main/resources/webapp/uploads";

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
	@UnitOfWork
	public Response createBacker(Backer backer) {
		Response response = null;
		try {
			logger.info(" In create Backers Patient");
			System.out.println(backer);
			Backer backerObj = backerDAO.findByEmail(backer.getBackerEmail());
			if(backerObj == null) {
				backerDAO.create(backer);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Backer Created Successfully")).build();
			} else {
				logger.severe("Email already Registered. Use different Email ID");
				return Response.status(Status.BAD_REQUEST)
						.entity(JsonUtils.getErrorJson(" Email already Registered. Use different Email ID")).build();
			}
			
		} catch (Exception e) {
			logger.severe("Unable to Create Patient " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Create Patient"))
					.build();
		}
	}
	
	
	@POST
	@Path("/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@UnitOfWork
	@Produces(MediaType.APPLICATION_JSON)
	public Response addLogo( 
			@FormDataParam("backerImage") InputStream is,
			@FormDataParam("backerImage") FormDataContentDisposition fileDetail,
			@Context HttpServletRequest request
			) {
		try{
//			System.out.println(request.getServletContext());
			String path = UPLOADS_DIR + File.separator + fileDetail.getFileName();
			System.out.println("Path : "+path);
			saveFile(is, path);
			Backer backerObj = new Backer();
			return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("File uploaded Successfully")).build();
		} catch (Exception e) {
			logger.severe("In catch Unable to Add Logo " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable inside catch to Add Logo")).build();
		}
	}
	
	private void saveFile(InputStream inputStream, String path) {
		try{
			OutputStream outputStream = new FileOutputStream(new File(path));
			int read=0;
			byte []bytes = new byte[1024];
			while((read = inputStream.read(bytes)) != -1){
				outputStream.write(bytes, 0, read);
			}
			outputStream.flush();
			outputStream.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
/*	Upload image
	@POST
	@Path("/logo")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@UnitOfWork
	@Produces(MediaType.APPLICATION_JSON)
	public Response addLogo( 
			@FormDataParam("backerImage") InputStream is,
			@FormDataParam("backerImage") FormDataContentDisposition fileDetail) {
		try {
			logger.info(" In addLogo");
				if (fileDetail.getFileName() != null) {
					System.out.println("before byte array");
					Backer backerObj = new Backer();
					byte[] imageByteValue = IOUtils.toByteArray(is);
					
					System.out.println("before find query");
					System.out.println("After find : "+imageByteValue);
					backerObj.setId(3);
					backerObj.setBackerName("aaqa");
					backerObj.setBackerCity("aaaq");
					backerObj.setBackerDist("Puneq");
					backerObj.setBackerTal("Baramaqti");
					backerObj.setBackerPhone("8990098888");
					backerObj.setBackerAadharNo("997878787878");
					backerObj.setBackerContribution("eqeee");
					backerObj.setBackerEmail("aqa@aa.com");
					backerObj.setBackerAmount("444444");
					backerObj.setBackerPaymentMode("qeeeee");
					backerObj.setBackerVision("eqeeeee");
					backerObj.setBackerPreferences("All");
					logger.info("DATA : "+backerObj);
					backerObj.setBackerImage(imageByteValue);
					System.out.println(backerObj);
					
					return Response.status(Status.OK).entity(JsonUtils.getJson(backerDAO.update(backerObj))).build();
				} else {
					logger.severe("In else Unable to Add Logo");
					return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to inside eless Add Logo")).build();
				}
			
		} catch (Exception e) {
			logger.severe("In catch Unable to Add Logo " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable inside catch to Add Logo")).build();
		}
	}*/
}
