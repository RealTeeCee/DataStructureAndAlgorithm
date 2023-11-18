package com.algo.algorithm;

import java.io.File;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class AlgorithmApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(AlgorithmApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		File file = new File("D:/test");
		long testLong = getDiskUsage(file);
		log.info("DiskUsage: {} KB", testLong);
		log.info("All files in folder {}: ", file.getAbsolutePath());
		getAllFilenames(file);
	}

	private void getAllFilenames(File file) {
		if (file.isDirectory()) {
			File[] listFiles = file.listFiles();
			for (File f : listFiles) {
				if (f.isDirectory()) {
					getAllFilenames(f);
				} else {
					log.info("+ {}", f.getName());
				}
			}
		}
	}

	// private long getDiskUsageArr(File file) {

	// if (file.isDirectory()) {
	// return getDiskUsage(file);
	// }

	// String[] files = file.list();
	// long totalLength = 0;
	// for (String url : files) {
	// File f = new File(url);
	// if (f.isDirectory()) {
	// return getDiskUsage(file);
	// }
	// totalLength += f.length();
	// }
	// return totalLength;
	// }

	private long getDiskUsage(File file) {

		long totalLength = 0;
		if (file.isDirectory()) {
			String[] files = file.list();
			for (String url : files) {
				File f = new File(file, url);
				totalLength += getDiskUsage(f);
			}
		}
		return totalLength > 0 ? totalLength : file.length();

	}

}
