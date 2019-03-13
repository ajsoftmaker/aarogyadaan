package com.aarogyadan.db;

import java.util.List;
import org.hibernate.SessionFactory;
import com.aarogyadan.entity.Event;
import io.dropwizard.hibernate.AbstractDAO;

public class EventDAO extends AbstractDAO<Event> {

	public EventDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Event> findAll() {
		return list(namedQuery("com.aarogyadan.entity.Event.findAll"));
	}

	public Event create(Event event) {
		return persist(event);
	}


	public Event update(Event event) {
		return persist(event);
	}

	public Event findById(long eventID) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Event.findById").setParameter("id", eventID));
	}	

	public void delete(long eventID) {
		currentSession().delete(findById(eventID));
	}

}
