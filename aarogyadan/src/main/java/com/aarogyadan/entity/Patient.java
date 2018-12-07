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
@Table(name = "patients")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Patient.findAll", query = "SELECT t FROM Patient t"),
	@NamedQuery(name = "com.aarogyadan.entity.Patient.findAllActive", query = "SELECT t FROM Patient t"),
		@NamedQuery(name = "com.aarogyadan.entity.Patient.findById", query = "SELECT t FROM Patient t where t.id = :id"),
		@NamedQuery(name = "com.aarogyadan.entity.Patient.findByEmail", query = "SELECT t FROM Patient t where t.patientEmail = :patientEmail")})

public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "patient_name", nullable = false)
	private String patientName;
	
	@Column(name = "patient_city", nullable = false)
	private String patientCity;
	
	@Column(name = "patient_dist", nullable = false)
	private String patientDist;
	
	@Column(name = "patient_tal", nullable = false)
	private String patientTal;

	@Column(name = "patient_phone")
	private String patientPhone;

	@Column(name = "patient_email")
	private String patientEmail;

	@Column(name = "patient_aadharno")
	private String patientAadharno;

	@Column(name = "patient_disese")
	private String patientDisese;
	
	@Column(name = "patient_helptype")
	private String patientHelptype;
	
	@Column(name = "patient_accountno")
	private String patientAccountno;
	
	@Column(name = "patient_doctorinfo")
	private String patientDoctorinfo;
	
	@Column(name = "patient_date")
	private String patientDate;	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientCity() {
		return patientCity;
	}

	public void setPatientCity(String patientCity) {
		this.patientCity = patientCity;
	}

	public String getPatientDist() {
		return patientDist;
	}

	public void setPatientDist(String patientDist) {
		this.patientDist = patientDist;
	}

	public String getPatientTal() {
		return patientTal;
	}

	public void setPatientTal(String patientTal) {
		this.patientTal = patientTal;
	}

	public String getPatientPhone() {
		return patientPhone;
	}

	public void setPatientPhone(String patientPhone) {
		this.patientPhone = patientPhone;
	}

	public String getPatientEmail() {
		return patientEmail;
	}

	public void setPatientEmail(String patientEmail) {
		this.patientEmail = patientEmail;
	}

	public String getPatientAadharno() {
		return patientAadharno;
	}

	public void setPatientAadharno(String patientAadharno) {
		this.patientAadharno = patientAadharno;
	}

	public String getPatientDisese() {
		return patientDisese;
	}

	public void setPatientDisese(String patientDisese) {
		this.patientDisese = patientDisese;
	}

	public String getPatientHelptype() {
		return patientHelptype;
	}

	public void setPatientHelptype(String patientHelptype) {
		this.patientHelptype = patientHelptype;
	}

	public String getPatientAccountno() {
		return patientAccountno;
	}

	public void setPatientAccountno(String patientAccountno) {
		this.patientAccountno = patientAccountno;
	}

	public String getPatientDoctorinfo() {
		return patientDoctorinfo;
	}

	public void setPatientDoctorinfo(String patientDoctorinfo) {
		this.patientDoctorinfo = patientDoctorinfo;
	}
	
	public String getPatientDate() {
		return patientDate;
	}

	public void setPatientDate(String patientDate) {
		this.patientDate = patientDate;
	}
	
}
