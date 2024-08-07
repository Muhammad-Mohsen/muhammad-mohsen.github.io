package com.mohsen.muhammad;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
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

public class App
{
    private static final String key = "BF0CD490B522DB71";
	private static final String iv = "4F754474483D7CA9";
	private static IvParameterSpec ivSpec;
	private static SecretKeySpec keySpec;
	private static Cipher cipher;

	// D:/Code/personal/coptic-reader/coptic-reader-actual/resources/assets
	private static final String INPUT_DOCS = "D:/Code/personal/coptic-reader/coptic-reader-actual/resources/assets/encrypted_documents/";
	private static final String INPUT_IMGS = "D:/Code/personal/coptic-reader/coptic-reader-actual/resources/assets/encrypted_images/";
	private static final String INPUT_DB = "D:/Code/personal/coptic-reader/coptic-reader-actual/resources/assets/encrypted_databases/";

	private static final String INPUT = INPUT_DB;

	public static void main(String[] args) throws Exception {
		init();

		ArrayList<File> files = getInputFiles(new File(INPUT));
		for (File file : files) {
			InputStream stream = read(file.getAbsolutePath());
			InputStream decryptedStream = decrypt(stream);
			Scanner data = unzip(decryptedStream);
			write(file, data);
		}

		System.out.println("DONE -- Processed file count: " + files.size());
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
			if (file.isDirectory()) files.addAll(getInputFiles(file));
			else if (file.getName().endsWith("xml")) continue;
			else files.add(file);
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

	static Scanner unzip(InputStream stream) throws Exception {
		ZipInputStream zipStream = new ZipInputStream(stream);
		zipStream.getNextEntry();

		return new Scanner(zipStream);
	}

	static void write(File file, Scanner data) throws Exception {
		File output = new File(file.getAbsolutePath().replace("encrypted_", "decrypted_") + ".xml");
        if (!output.getParentFile().exists()) output.getParentFile().mkdirs();

		FileWriter writer = new FileWriter(output);

		while(data.hasNextLine()) writer.write(data.nextLine());

		data.close();
		writer.close();
	}
}
