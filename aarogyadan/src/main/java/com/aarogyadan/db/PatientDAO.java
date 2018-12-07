package com.aarogyadan.db;

import java.util.List;
import javax.ws.rs.core.Response;
import org.hibernate.SessionFactory;
import com.aarogyadan.entity.Patient;
import io.dropwizard.hibernate.AbstractDAO;

public class PatientDAO extends AbstractDAO<Patient> {

	public PatientDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Patient> findAll() {
		return list(namedQuery("com.aarogyadan.entity.Patient.findAll"));
	}

	public Patient create(Patient patient) {
		return persist(patient);
	}


	public Patient update(Patient patient) {
		return persist(patient);
	}

	public Patient findById(long patientID) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Patient.findById").setParameter("id", patientID));
	}

	public Patient findByEmail(String email) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Patient.findByEmail").setParameter("patientEmail", email));
	}

	public void delete(long patientID) {
		currentSession().delete(findById(patientID));
	}

	public List<Patient> findAllActive() {
		return list(namedQuery("com.aarogyadan.entity.Patient.findAllActive"));
	}
}
