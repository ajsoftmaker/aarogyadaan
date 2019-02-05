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
@Table(name = "feedbacks")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Feedback.findAll", query = "SELECT t FROM Feedback t"),
		@NamedQuery(name = "com.aarogyadan.entity.Feedback.findById", query = "SELECT t FROM Feedback t where t.id = :id")})

public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "feedback_name", nullable = false)
	private String feedbackName;
	
	@Column(name = "feedback_msg", nullable = false)
	private String feedbackMsg;
	
	@Column(name = "feedback_mail", nullable = false)
	private String feedbackMail;
	
	@Column(name = "feedback_phone", nullable = false)
	private String feedbackPhone;
	
	@Column(name = "feedback_status", nullable = false)
	private int feedbackStatus;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFeedbackName() {
		return feedbackName;
	}

	public void setFeedbackName(String feedbackName) {
		this.feedbackName = feedbackName;
	}

	public String getFeedbackMsg() {
		return feedbackMsg;
	}

	public void setFeedbackMsg(String feedbackMsg) {
		this.feedbackMsg = feedbackMsg;
	}

	public String getFeedbackMail() {
		return feedbackMail;
	}

	public void setFeedbackMail(String feedbackMail) {
		this.feedbackMail = feedbackMail;
	}

	public String getFeedbackPhone() {
		return feedbackPhone;
	}

	public void setFeedbackPhone(String feedbackPhone) {
		this.feedbackPhone = feedbackPhone;
	}

	public int getFeedbackStatus() {
		return feedbackStatus;
	}

	public void setFeedbackStatus(int feedbackStatus) {
		this.feedbackStatus = feedbackStatus;
	}
	
}
