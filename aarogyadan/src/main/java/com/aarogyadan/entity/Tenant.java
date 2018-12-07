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
@Table(name = "tenants")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Tenant.findAll", query = "SELECT t FROM Tenant t"),
		@NamedQuery(name = "com.aarogyadan.entity.Tenant.findById", query = "SELECT t FROM Tenant t where t.id = :id"),
		@NamedQuery(name = "com.aarogyadan.entity.Tenant.findByEmail", query = "SELECT t FROM Tenant t where t.tenantEmail = :tenantEmail")})

public class Tenant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "tenant_name", nullable = false)
	private String tenantName;
	
	@Column(name = "tenant_city", nullable = false)
	private String tenantCity;
	
	@Column(name = "tenant_dist", nullable = false)
	private String tenantDist;
	
	@Column(name = "tenant_tal", nullable = false)
	private String tenantTal;

	@Column(name = "tenant_phone")
	private String tenantPhone;

	@Column(name = "tenant_email")
	private String tenantEmail;

	@Column(name = "tenant_occupation")
	private String tenantOccupation;

	@Column(name = "tenant_vision")
	private String tenantVision;
	
	@Column(name = "tenant_status")
	private String tenantStatus;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTenantName() {
		return tenantName;
	}

	public void setTenantName(String tenantName) {
		this.tenantName = tenantName;
	}

	public String getTenantCity() {
		return tenantCity;
	}

	public void setTenantCity(String tenantCity) {
		this.tenantCity = tenantCity;
	}

	public String getTenantDist() {
		return tenantDist;
	}

	public void setTenantDist(String tenantDist) {
		this.tenantDist = tenantDist;
	}

	public String getTenantTal() {
		return tenantTal;
	}

	public void setTenantTal(String tenantTal) {
		this.tenantTal = tenantTal;
	}

	public String getTenantPhone() {
		return tenantPhone;
	}

	public void setTenantPhone(String tenantPhone) {
		this.tenantPhone = tenantPhone;
	}

	public String getTenantEmail() {
		return tenantEmail;
	}

	public void setTenantEmail(String tenantEmail) {
		this.tenantEmail = tenantEmail;
	}

	public String getTenantOccupation() {
		return tenantOccupation;
	}

	public void setTenantOccupation(String tenantOccupation) {
		this.tenantOccupation = tenantOccupation;
	}

	public String getTenantVision() {
		return tenantVision;
	}

	public void setTenantVision(String tenantVision) {
		this.tenantVision = tenantVision;
	}

	public String getTenantStatus() {
		return tenantStatus;
	}

	public void setTenantStatus(String tenantStatus) {
		this.tenantStatus = tenantStatus;
	}
	
}
