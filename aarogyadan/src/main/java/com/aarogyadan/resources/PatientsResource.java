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
import com.aarogyadan.db.PatientDAO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Patient;
import com.aarogyadan.utils.JsonUtils;
import com.aarogyadan.utils.MailUtils;
import com.aarogyadan.utils.SendMail;
import com.aarogyadan.utils.Utils;
import com.google.gson.JsonObject;

import io.dropwizard.auth.Auth;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/patients")
@Produces(MediaType.APPLICATION_JSON)
public class PatientsResource {
	private final PatientDAO patientDAO;
	private final AarogyadanUserDAO userDAO;
	private final Logger logger = Logger.getLogger(PatientsResource.class.getName());

	public PatientsResource(PatientDAO dao, AarogyadanUserDAO userDAO) {
		this.patientDAO = dao;
		this.userDAO = userDAO;

	}

	@GET
	@UnitOfWork
	public Response listPatients() {
		try {
			logger.info(" In listPatients");
			return Response.status(Status.OK).entity(JsonUtils.getJson(patientDAO.findAll())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Patients " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Patients"))
					.build();
		}
	}
	
	@GET
	@UnitOfWork
	@Path("/active")
	public Response listActivePatients() {
		try {
			logger.info(" In list Active Patients");
			return Response.status(Status.OK).entity(JsonUtils.getJson(patientDAO.findAllActive())).build();
		} catch (Exception e) {
			logger.severe("Unable to Find List of Patients " + e);
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Unable to Find List of Patients"))
					.build();
		}
	}

	@POST
	@UnitOfWork
	public Response createPatient(Patient patient) {
		Response response = null;
		try {
			logger.info(" In create Patient");
			Patient patientObject = patientDAO.findByEmail(patient.getPatientEmail());
			if (patientObject == null) {
				patientDAO.create(patient);
				return Response.status(Status.OK).entity(JsonUtils.getSuccessJson("Patient Created Successfully")).build();
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
}
