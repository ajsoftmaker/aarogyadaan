package com.aarogyadan;

import java.util.Map;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;

import com.aarogyadan.auth.AarogyadanAuthenticator;
import com.aarogyadan.db.AarogyadanUserDAO;
import com.aarogyadan.db.BackerDAO;
import com.aarogyadan.db.BlogDAO;
import com.aarogyadan.db.EventDAO;
import com.aarogyadan.db.FeedbackDAO;
import com.aarogyadan.db.PatientDAO;
import com.aarogyadan.db.TenantDAO;
import com.aarogyadan.db.VolunteerDAO;
import com.aarogyadan.entity.Backer;
import com.aarogyadan.entity.Blog;
import com.aarogyadan.entity.Event;
import com.aarogyadan.entity.Feedback;
import com.aarogyadan.entity.LoginUser;
import com.aarogyadan.entity.Patient;
import com.aarogyadan.entity.Tenant;
import com.aarogyadan.entity.Volunteer;
import com.aarogyadan.health.TemplateHealthCheck;
import com.aarogyadan.resources.AarogyadanUsersResource;
import com.aarogyadan.resources.BackerResource;
import com.aarogyadan.resources.BackersResource;
import com.aarogyadan.resources.BlogsResource;
import com.aarogyadan.resources.EventsResource;
import com.aarogyadan.resources.FeedbackResource;
import com.aarogyadan.resources.FeedbacksResource;
import com.aarogyadan.resources.LoginResource;
import com.aarogyadan.resources.PatientsResource;
import com.aarogyadan.resources.TenantResource;
import com.aarogyadan.resources.TenantsResource;
import com.aarogyadan.resources.VolunteerResource;
import com.aarogyadan.resources.VolunteersResource;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.CachingAuthenticator;
import io.dropwizard.auth.basic.BasicCredentialAuthFilter;
import io.dropwizard.auth.basic.BasicCredentials;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.db.PooledDataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.migrations.MigrationsBundle;
import io.dropwizard.server.DefaultServerFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;

public class AarogyadanWebApplication extends Application<AarogyadanWebConfiguration> {
	private final HibernateBundle<AarogyadanWebConfiguration> hibernateBundle = 
            new HibernateBundle<AarogyadanWebConfiguration>(Event.class, Feedback.class, Tenant.class, Volunteer.class, LoginUser.class, 
            		Backer.class, Blog.class, Patient.class){
           
				@Override
				public PooledDataSourceFactory getDataSourceFactory(AarogyadanWebConfiguration configuration) {
					return configuration.getDataSourceFactory();
				}
            };
            
    public static void main(String[] args) throws Exception {
        new AarogyadanWebApplication().run(args);
    }

   
    @Override
    public String getName() {
        return "Aarogyadan";
    }

    @Override
    public void initialize(Bootstrap<AarogyadanWebConfiguration> bootstrap) {
        // Enable variable substitution with environment variables
        bootstrap.setConfigurationSourceProvider(
                new SubstitutingSourceProvider(
                        bootstrap.getConfigurationSourceProvider(),
                        new EnvironmentVariableSubstitutor(false)
                )
        );
        bootstrap.addBundle(new AssetsBundle("/webapp", "/", "index.html", "WebApp"));
        bootstrap.addBundle(new MigrationsBundle<AarogyadanWebConfiguration>() {
            @Override
            public DataSourceFactory getDataSourceFactory(AarogyadanWebConfiguration configuration) {
                return configuration.getDataSourceFactory();
            }
        });
        bootstrap.addBundle(hibernateBundle);
        bootstrap.addBundle(new ViewBundle<AarogyadanWebConfiguration>() {
            @Override
            public Map<String, Map<String, String>> getViewConfiguration(AarogyadanWebConfiguration configuration) {
                return configuration.getViewRendererConfiguration();
            }
        });
    }

    @Override
    public void run(AarogyadanWebConfiguration configuration, Environment environment) {
    	ApplicationContext.init(configuration);
    	((DefaultServerFactory) configuration.getServerFactory()).setJerseyRootPath("/api/*");
    	environment.jersey().register(RolesAllowedDynamicFeature.class);
    	environment.healthChecks().register("template", new TemplateHealthCheck());
    	
    	CachingAuthenticator<BasicCredentials, LoginUser> cachingAuthenticator = new CachingAuthenticator<>(
    			environment.metrics(),
    			new AarogyadanAuthenticator(hibernateBundle.getSessionFactory()),
    			configuration.getAuthenticationCachePolicy());
    			environment.jersey().register(new AuthDynamicFeature(new BasicCredentialAuthFilter.Builder<LoginUser>()
    			.setAuthenticator(cachingAuthenticator).setRealm("BootInfoTech").buildAuthFilter()));
    			environment.jersey().register(new AuthValueFactoryProvider.Binder<>(LoginUser.class));
    	
    	registerLabJumpResources(configuration, environment);
      
    }

	private void registerLabJumpResources(AarogyadanWebConfiguration configuration,Environment environment) {
		final AarogyadanUserDAO arogyauserDAO = new AarogyadanUserDAO(hibernateBundle.getSessionFactory());
		final TenantDAO tenantDAO = new TenantDAO(hibernateBundle.getSessionFactory());
		final LoginResource loginRes = new LoginResource(configuration.getAdminuser(), configuration.getAdminpwd(), arogyauserDAO);
		environment.jersey().register(loginRes);
		
		final TenantResource tenantResource = new TenantResource(tenantDAO, arogyauserDAO);
		environment.jersey().register(tenantResource);
		final TenantsResource tenantsResource = new TenantsResource(tenantDAO,arogyauserDAO);
		environment.jersey().register(tenantsResource);
		
		final VolunteerDAO volunteerDAO = new VolunteerDAO(hibernateBundle.getSessionFactory());
		final VolunteerResource volunteerResource = new VolunteerResource(volunteerDAO, arogyauserDAO);
		environment.jersey().register(volunteerResource);
		final VolunteersResource volunteersResource = new VolunteersResource(volunteerDAO,arogyauserDAO);
		environment.jersey().register(volunteersResource);
		
		final BackerDAO backerDAO = new BackerDAO(hibernateBundle.getSessionFactory());
		final BackerResource backerResource = new BackerResource(backerDAO, arogyauserDAO);
		environment.jersey().register(backerResource);
		final BackersResource backersResource = new BackersResource(backerDAO);
		environment.jersey().register(backersResource);
		
		final BlogDAO blogDAO = new BlogDAO(hibernateBundle.getSessionFactory());
		final BlogsResource blogsResource = new BlogsResource(blogDAO, arogyauserDAO);
		environment.jersey().register(blogsResource);
		
		final FeedbackDAO feedbackDAO = new FeedbackDAO(hibernateBundle.getSessionFactory());
		final FeedbacksResource feedbacksResource = new FeedbacksResource(feedbackDAO);
		environment.jersey().register(feedbacksResource);
		final FeedbackResource feedbackResource = new FeedbackResource(feedbackDAO, arogyauserDAO);
		environment.jersey().register(feedbackResource);
		
		final PatientDAO patientDAO = new PatientDAO(hibernateBundle.getSessionFactory());
		final PatientsResource patientsResource = new PatientsResource(patientDAO, arogyauserDAO);
		environment.jersey().register(patientsResource);
		
		final EventDAO eventDAO = new EventDAO(hibernateBundle.getSessionFactory());
		final EventsResource eventsResource = new EventsResource(eventDAO, arogyauserDAO);
		environment.jersey().register(eventsResource);
		
		final AarogyadanUsersResource labJumpUserResource = new AarogyadanUsersResource(arogyauserDAO, tenantDAO);
		environment.jersey().register(labJumpUserResource);
		
		environment.jersey().register(MultiPartFeature.class);
		
	}
}
