package com.aarogyadan.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "events")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Event.findAll", query = "SELECT t FROM Event t"),
		@NamedQuery(name = "com.aarogyadan.entity.Event.findById", query = "SELECT t FROM Event t where t.id = :id")})

public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "event_title", nullable = false)
	private String eventTitle;
	
	@Column(name = "event_date")
	private String eventDate;
	
	@Column(name = "event_time")
	private String eventTime;
	
	@Column(name = "event_info", nullable = false)
	private String eventInfo;
	
	@Column(name = "event_address", nullable = false)
	private String eventAddress;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEventTitle() {
		return eventTitle;
	}

	public void setEventTitle(String eventTitle) {
		this.eventTitle = eventTitle;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}

	public String getEventInfo() {
		return eventInfo;
	}

	public void setEventInfo(String eventInfo) {
		this.eventInfo = eventInfo;
	}

	public String getEventAddress() {
		return eventAddress;
	}

	public void setEventAddress(String eventAddress) {
		this.eventAddress = eventAddress;
	}

	public String getEventTime() {
		return eventTime;
	}

	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}
	
}
