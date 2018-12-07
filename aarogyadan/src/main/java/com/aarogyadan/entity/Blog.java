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
@Table(name = "blogs")
@NamedQueries({ @NamedQuery(name = "com.aarogyadan.entity.Blog.findAll", query = "SELECT t FROM Blog t"),
		@NamedQuery(name = "com.aarogyadan.entity.Blog.findById", query = "SELECT t FROM Blog t where t.id = :id")})

public class Blog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "blog_title", nullable = false)
	private String blogTitle;
	
	@Column(name = "blog_date")
	private String blogDate;
	
	@Column(name = "blog_data", nullable = false)
	private String blogData;
	
	@Column(name = "blog_writer", nullable = false)
	private String blogWriter;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBlogTitle() {
		return blogTitle;
	}

	public void setBlogTitle(String blogTitle) {
		this.blogTitle = blogTitle;
	}

	public String getBlogDate() {
		return blogDate;
	}

	public void setBlogDate(String blogDate) {
		this.blogDate = blogDate;
	}

	public String getBlogData() {
		return blogData;
	}

	public void setBlogData(String blogData) {
		this.blogData = blogData;
	}

	public String getBlogWriter() {
		return blogWriter;
	}

	public void setBlogWriter(String blogWriter) {
		this.blogWriter = blogWriter;
	}
	
}
