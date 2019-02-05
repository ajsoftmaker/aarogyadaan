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
@Table(name = "backers")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Backer.findAll", query = "SELECT b FROM Backer b"),
		@NamedQuery(name = "com.aarogyadan.entity.Backer.findById", query = "SELECT b FROM Backer b where b.id = :id"),
		@NamedQuery(name = "com.aarogyadan.entity.Backer.findByEmail", query = "SELECT b FROM Backer b where b.backerEmail = :backerEmail")})

public class Backer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "backer_name", nullable = false)
	private String backerName;
	
	@Column(name = "backer_city", nullable = false)
	private String backerCity;
	
	@Column(name = "backer_dist", nullable = false)
	private String backerDist;
	
	@Column(name = "backer_tal", nullable = false)
	private String backerTal;

	@Column(name = "backer_phone")
	private String backerPhone;

	@Column(name = "backer_email")
	private String backerEmail;	

	@Column(name = "backer_vision")
	private String backerVision;
	
	@Column(name = "backer_aadharno")
	private String backerAadharNo;
	
	@Column(name = "backer_contribution")
	private String backerContribution;
	
	@Column(name = "backer_amount")
	private String backerAmount;
	
	@Column(name = "backer_paymentmode")
	private String backerPaymentMode;
	
	@Column(name = "backer_preferences")
	private String backerPreferences;
	
	@Column(name = "backer_image")
	private byte[] backerImage;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBackerName() {
		return backerName;
	}

	public void setBackerName(String backerName) {
		this.backerName = backerName;
	}

	

	public String getBackerCity() {
		return backerCity;
	}

	public void setBackerCity(String backerCity) {
		this.backerCity = backerCity;
	}

	public String getBackerDist() {
		return backerDist;
	}

	public void setBackerDist(String backerDist) {
		this.backerDist = backerDist;
	}

	public String getBackerTal() {
		return backerTal;
	}

	public void setBackerTal(String backerTal) {
		this.backerTal = backerTal;
	}

	public String getBackerPhone() {
		return backerPhone;
	}

	public void setBackerPhone(String backerPhone) {
		this.backerPhone = backerPhone;
	}

	public String getBackerEmail() {
		return backerEmail;
	}

	public void setBackerEmail(String backerEmail) {
		this.backerEmail = backerEmail;
	}

	public String getBackerVision() {
		return backerVision;
	}

	public void setBackerVision(String backerVision) {
		this.backerVision = backerVision;
	}

	public String getBackerAadharNo() {
		return backerAadharNo;
	}

	public void setBackerAadharNo(String backerAadharNo) {
		this.backerAadharNo = backerAadharNo;
	}

	public String getBackerContribution() {
		return backerContribution;
	}

	public void setBackerContribution(String backerContribution) {
		this.backerContribution = backerContribution;
	}

	public String getBackerAmount() {
		return backerAmount;
	}

	public void setBackerAmount(String backerAmount) {
		this.backerAmount = backerAmount;
	}

	public String getBackerPaymentMode() {
		return backerPaymentMode;
	}

	public void setBackerPaymentMode(String backerPaymentMode) {
		this.backerPaymentMode = backerPaymentMode;
	}

	public String getBackerPreferences() {
		return backerPreferences;
	}

	public void setBackerPreferences(String backerPreferences) {
		this.backerPreferences = backerPreferences;
	}

	public byte[] getBackerImage() {
		return backerImage;
	}

	public void setBackerImage(byte[] backerImage) {
		this.backerImage = backerImage;
	}

	
	
}
