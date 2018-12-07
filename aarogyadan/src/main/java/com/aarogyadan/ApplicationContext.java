package com.aarogyadan;

public class ApplicationContext {

	private static ApplicationContext instance = null;
	private AarogyadanWebConfiguration config;

	private ApplicationContext(AarogyadanWebConfiguration config) {
		this.config = config;
	}

	public static ApplicationContext init(AarogyadanWebConfiguration config) {
		instance = new ApplicationContext(config);
		return getInstance();
	}

	public static ApplicationContext getInstance() {
		if (instance == null) {
			throw new RuntimeException("Application Context is not initialized !");
		}

		return instance;
	}

	public AarogyadanWebConfiguration getConfig() {
		return config;
	}

}
