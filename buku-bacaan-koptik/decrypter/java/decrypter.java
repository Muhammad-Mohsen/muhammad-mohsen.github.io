package decrypter;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

class Program {

	private static final String k_sDefaultSecretKey = "BF0CD490B522DB71";
	private static final String k_sIv = "   ";
	private static Cipher m_oCipher;
	private static IvParameterSpec m_oIvSpec;
	private static SecretKeySpec m_oKeySpec;

	public static void main(String[] args) {
		System.out.println("Hello World!");

		init();

		decrypt("someString");
	}

	public static void init() {
		try {
			m_oIvSpec = new IvParameterSpec(k_sIv.getBytes());
			m_oKeySpec = new SecretKeySpec(k_sDefaultSecretKey.getBytes(), "AES");
			m_oCipher = Cipher.getInstance("AES/CBC/PKCS5Padding", "BC");
		} catch (Exception e) {
			System.out.println("init FAILED!: " + e.getMessage());
			e.printStackTrace();
		}
	}

	public static InputStream decrypt(InputStream inputStream) throws InvalidKeyException, InvalidAlgorithmParameterException {
		m_oCipher.init(2, m_oKeySpec, m_oIvSpec); // 2: decrypt mode
		return new CipherInputStream(inputStream, m_oCipher);
	}

	public static String encrypt(String str) throws IOException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		m_oCipher.init(1, m_oKeySpec, m_oIvSpec);
		byte[] encode = Base64.getEncoder().encode(m_oCipher.doFinal(str.getBytes()));
		ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
		byteArrayOutputStream.write(encode);
		return byteArrayOutputStream.toString();
	}

	public static String decrypt(String str) {
		try {
			m_oCipher.init(2, m_oKeySpec, m_oIvSpec);
			try {
				byte[] doFinal = m_oCipher.doFinal(Base64.getDecoder().decode(str.getBytes()));
				ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
				byteArrayOutputStream.write(doFinal);
				return byteArrayOutputStream.toString();

			} catch (Exception e) {
				e.printStackTrace();
				return "";
			}

		} catch (Exception e) {
			System.out.println("decrypt FAILED!: " + e.getMessage());
			e.printStackTrace();
			return "";
		}
	}
}
