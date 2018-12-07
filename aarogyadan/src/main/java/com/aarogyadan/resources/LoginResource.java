package com.aarogyadan.resources;

import java.util.List;
import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.aarogyadan.ApplicationContext;
import com.aarogyadan.auth.JwtToken;
import com.aarogyadan.db.AarogyadanUserDAO;
import com.aarogyadan.dto.LoginUserDTO;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.utils.JsonUtils;
import com.google.gson.JsonObject;

import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.hibernate.UnitOfWork;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
public class LoginResource {
	private final Logger logger = Logger.getLogger(LoginResource.class.getName());
	private String saUsername = null;
	private String saPassword = null;
	private AarogyadanUserDAO ljuserDAO = null;

	public LoginResource(String saUsername, String saPassword, AarogyadanUserDAO ljuserDAO) {
		this.saUsername = saUsername;
		this.saPassword = saPassword;
		this.ljuserDAO = ljuserDAO;
	}

	@GET
	@UnitOfWork
	public Response login(@HeaderParam("authorization") String authorization) throws Exception {
		boolean islabJumpUserFound = false;
		List<LoginUser> labJumpUserList;
		LoginUser userObj = null;
		String[] authArray = authorization.split(" ");
		if (authArray.length != 4) {
			logger.severe("User name or Password is missing");
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("User name or Password is missing"))
					.build();
		}
		if (authArray[0].equalsIgnoreCase("Basic")) {
			String userName = authArray[1];
			String password = authArray[2];
			String userRole = authArray[3];
			labJumpUserList = ljuserDAO.findByEmail(userName);
			if (userName.contentEquals(saUsername) && password.contentEquals(saPassword)) {
				userRole = LoginUser.SUPERADMIN;
				islabJumpUserFound = true;
				userObj = new LoginUser(userName, password, userRole);
			} else if (labJumpUserList != null) {
				for (LoginUser loginUser : labJumpUserList) {
					if (loginUser.getUserloginID().equals(userName) && loginUser.getPassword().equals(password) && loginUser.getStatus().equals("1")
							&& loginUser.getUserRole().equals(userRole)) {
						userObj = loginUser;
						islabJumpUserFound = true;
					}
				}
			} else {
				logger.severe("User does not exist");
				return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("User does not exist")).build();
			}
			if (islabJumpUserFound == true) {
				logger.info("User Found " + userObj.getLoginID());
				try {
					String token = JwtToken.generateToken(userObj.getLoginID(), userObj);
					
					LoginUserDTO userDto = new LoginUserDTO();
					userDto.setEmail(userObj.getEmail());
					userDto.setPassword(userObj.getPassword());
					userDto.setStatus(userObj.getUserRole());
					userDto.setTenant_id(userObj.getTenant_id());
					userDto.setToken(token);
					userDto.setUserloginID(userObj.getLoginID());
					userDto.setUserRole(userObj.getUserRole());
					return Response.status(Status.OK).entity(JsonUtils.getJson(userDto)).build();
				} catch (Exception e) {
					throw new AuthenticationException(e);
				}
				

			} else {
				logger.severe("User Not Found, Please Enter Valid UserName and Password");
				return Response.status(Status.BAD_REQUEST)
						.entity(JsonUtils.getErrorJson("User Not Found, Please Enter Valid UserName and Password"))
						.build();
			}
		}
		logger.severe("User does not exist");
		return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("User does not exist")).build();
	}

	@GET
	@Path("/superadmin")
	public Response getSuperAdmin() {
		JsonObject json = new JsonObject();
		String adminUser = ApplicationContext.getInstance().getConfig().getAdminuser();
		String adminPassword = ApplicationContext.getInstance().getConfig().getAdminpwd();
		
		if (adminUser != null && adminPassword != null) {
			if (adminUser != "" && adminPassword != "") {
				json.addProperty("status", Response.Status.OK.getStatusCode());
				json.addProperty("adminUser", adminUser);
				json.addProperty("adminPassword", adminPassword);
				return Response.status(Status.OK).entity(json.toString()).build();
			} else {
				logger.severe("Admin User and Password should not be empty");
				return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Admin User and Password should not be empty")).build();
			}
		} else {
			logger.severe("Admin User and Password are not specified in YML file");
			return Response.status(Status.BAD_REQUEST).entity(JsonUtils.getErrorJson("Admin User and Password are not specified in YML file")).build();
		}

	}
}
