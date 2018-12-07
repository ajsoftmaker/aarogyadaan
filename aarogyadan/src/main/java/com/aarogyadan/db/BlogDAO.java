package com.aarogyadan.db;

import java.util.List;
import javax.ws.rs.core.Response;
import org.hibernate.SessionFactory;
import com.aarogyadan.entity.Blog;
import io.dropwizard.hibernate.AbstractDAO;

public class BlogDAO extends AbstractDAO<Blog> {

	public BlogDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Blog> findAll() {
		return list(namedQuery("com.aarogyadan.entity.Blog.findAll"));
	}

	public Blog create(Blog blog) {
		return persist(blog);
	}


	public Blog update(Blog blog) {
		return persist(blog);
	}

	public Blog findById(long blogID) {
		return uniqueResult(namedQuery("com.aarogyadan.entity.Blog.findById").setParameter("id", blogID));
	}	

	public void delete(long blogID) {
		currentSession().delete(findById(blogID));
	}

}
