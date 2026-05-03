package com.mohsen.muhammad;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.Security;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.zip.ZipInputStream;

import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

// to decrypt an image, BitmapFactory.decodeStream() alternative is needed

public class App {

	// H:Old implementation of the keys, updated to match the new version
	// private static final String key = "vs802hnf92hn2bg";
	// private static final String iv = "08hsdf08h2trh02";
	// private static IvParameterSpec ivSpec;
	// private static SecretKeySpec keySpec;
	private static Cipher cipher;

	// H: From original app
	private static IvParameterSpec ivSpec;
	private static SecretKeySpec keySpec;
	private static final String iv = f("08hsdf08h2trh02");
	private static String key = f("vs802hnf92hn2bg,");

	private static final String INPUT_DOCS = "D:/Buku Bacaan Koptik Env/2026 - coptic-reader-latest-incl-docs/coptic-reader-latest-incl-docs/resources/assets/encrypted_documents/";
	// H:not used
	// private static final String INPUT_IMGS = "D:/Buku Bacaan Koptik Env/2026 -
	// coptic-reader-latest-incl-docs/coptic-reader-latest-incl-docs/resources/assets/encrypted_images/";
	// private static final String INPUT_DB = "D:/Buku Bacaan Koptik Env/2026 -
	// coptic-reader-latest-incl-docs/coptic-reader-latest-incl-docs/resources/assets/encrypted_databases/";

	private static final String INPUT = INPUT_DOCS;


	public static String f(String str) {
		long j = -6651320959314335863L;
		for (int i = 0; i < str.length(); i++) {
			long jCharAt = j ^ (((long) str.charAt(i)) << ((i % 8) * 8));
			long j2 = ((jCharAt >>> 51) | (jCharAt << 13)) * (-7046029254386353131L);
			j = j2 ^ (j2 >>> 17);
		}
		long j3 = (j ^ (j >>> 33)) * (-4417276706812531889L);
		long j4 = (j3 ^ (j3 >>> 29)) * 1609587929392839161L;
		return String.format("%016X", Long.valueOf(j4 ^ (j4 >>> 32)));
	}

	public static void main(String[] args) throws Exception {
		init();

		ArrayList<File> files = getInputFiles(new File(INPUT));
		for (File file : files) {
			InputStream stream = read(file.getAbsolutePath());
			InputStream decryptedStream = decrypt(stream);
			String xml = unzipToString(decryptedStream);
			

			//H: wriet and fix encoding of arabic text
			writeAndFixEncoding(file, xml);
			// Scanner data = unzip(decryptedStream);
			// write(file, data);
		}

		System.out.println("DONE -- Processed file count: " + files.size());
	}

	//H: new write function to fix the arabic text
	static void writeAndFixEncoding(File file, String content) throws Exception {
		File output = new File(file.getAbsolutePath()
				.replace("encrypted_", "decrypted_") + ".xml");

		if (!output.getParentFile().exists())
			output.getParentFile().mkdirs();

		OutputStreamWriter writer = new OutputStreamWriter(
				new FileOutputStream(output),
				StandardCharsets.UTF_8);

		writer.write(content);
		writer.close();
	}

	static void init() throws Exception {
		// add bouncy castle algo which was originally used for encryption
		Security.addProvider(new BouncyCastleProvider());

		// init the cipher
		ivSpec = new IvParameterSpec(iv.getBytes());
		keySpec = new SecretKeySpec(key.getBytes(), "AES");
		cipher = Cipher.getInstance("AES/CBC/PKCS5Padding", "BC");
	}

	static ArrayList<File> getInputFiles(File dir) {
		ArrayList<File> files = new ArrayList<>();

		for (File file : dir.listFiles()) {
			if (file.isDirectory())
				files.addAll(getInputFiles(file));
			else if (file.getName().endsWith("xml"))
				continue;
			else
				files.add(file);
		}

		return files;
	}

	public static InputStream read(String path) throws IOException {
		FileInputStream file = new FileInputStream(path);
		InputStream buffer = (InputStream) new BufferedInputStream(file, 8192);

		return buffer;
	}

	static InputStream decrypt(InputStream inputStream) throws InvalidKeyException, InvalidAlgorithmParameterException {
		cipher.init(2, keySpec, ivSpec); // 2: decrypt mode
		return new CipherInputStream(inputStream, cipher);
	}

	static String unzipToString(InputStream stream) throws Exception {
		ZipInputStream zipStream = new ZipInputStream(stream);
		zipStream.getNextEntry();

		ByteArrayOutputStream buffer = new ByteArrayOutputStream();
		byte[] data = new byte[4096];
		int n;

		while ((n = zipStream.read(data)) != -1) {
			buffer.write(data, 0, n);
		}

		zipStream.close();

		// Decode ONCE properly
		return new String(buffer.toByteArray(), StandardCharsets.UTF_8);
	}

	static Scanner unzip(InputStream stream) throws Exception {
		ZipInputStream zipStream = new ZipInputStream(stream);
		zipStream.getNextEntry();

		return new Scanner(zipStream);
	}
	//H: note used anymore
	static void write(File file, Scanner data) throws Exception {
		File output = new File(file.getAbsolutePath().replace("encrypted_", "decrypted_") + ".xml");
		if (!output.getParentFile().exists())
			output.getParentFile().mkdirs();

		FileWriter writer = new FileWriter(output);

		while (data.hasNextLine())
			writer.write(data.nextLine());

		data.close();
		writer.close();
	}
}
