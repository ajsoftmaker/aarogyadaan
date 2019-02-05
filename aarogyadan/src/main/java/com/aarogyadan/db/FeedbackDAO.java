package com.aarogyadan.db;

import java.util.List;
import javax.ws.rs.core.Response;
import org.hibernate.SessionFactory;
import com.aarogyadan.entity.Feedback;
import io.dropwizard.hibernate.AbstractDAO;

public class FeedbackDAO extends AbstractDAO<Feedback> {

	public FeedbackDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Feedback> findAll() {
		return list(namedQuery("com.aarogyadan.entity.Feedback.findAll"));
	}

	public Feedback create(Feedback feedback) {
		return persist(feedback);
	}


	public Feedback update(Feedback feedback) {
		return persist(feedback);
	}

	public Feedback findById(long feedbackID) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Feedback.findById").setParameter("id", feedbackID));
	}	

	public void delete(long feedbackID) {
		currentSession().delete(findById(feedbackID));
	}

}
