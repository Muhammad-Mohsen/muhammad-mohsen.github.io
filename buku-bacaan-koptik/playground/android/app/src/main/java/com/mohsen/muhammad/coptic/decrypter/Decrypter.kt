package com.mohsen.muhammad.coptic.decrypter

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import java.io.BufferedInputStream
import java.io.File
import java.io.FileOutputStream
import java.io.FileWriter
import java.io.InputStream
import java.util.Scanner
import java.util.zip.ZipInputStream
import javax.crypto.Cipher
import javax.crypto.CipherInputStream
import javax.crypto.spec.IvParameterSpec
import javax.crypto.spec.SecretKeySpec


/**
 * Created by muhammad.mohsen on 5/4/2023.
 */
class AssetDecrypter (c: Context) {

	companion object {
		const val ENCRYPTED_DOCUMENTS = "encrypted_documents"
		const val ENCRYPTED_IMAGES = "encrypted_images"
	}

	private val key = "BF0CD490B522DB71"
	private val iv = "4F754474483D7CA9"
	private var ivSpec: IvParameterSpec = IvParameterSpec(iv.toByteArray())
	private var keySpec: SecretKeySpec = SecretKeySpec(key.toByteArray(), "AES")

	private var cipher: Cipher = Cipher.getInstance("AES/CBC/PKCS5Padding")

	private val context: Context = c

	fun run(basePath: String = ENCRYPTED_DOCUMENTS) {
		cipher.init(Cipher.DECRYPT_MODE, keySpec, ivSpec)

		val assets = list(basePath)
		for (asset in assets) {
			val stream = read(asset)
			val decryptedStream = decrypt(stream)
			val data = unzip(decryptedStream)

			if (basePath == ENCRYPTED_DOCUMENTS) writeDocument(asset, Scanner(data))
			else writeImage(asset, data)
		}
	}

	// lists assets recursively
	private fun list(_path: String): ArrayList<String> {
		val path = "$_path/"
		val assets = ArrayList<String>()
		context.assets.list(path)?.forEach {
			if (it.isNullOrBlank()) return@forEach

			if (it.endsWith(".cr")) assets.add(path + it) // that's a file
			else assets.addAll(list(path + it)) // that's a dir
		}

		return assets
	}

	private fun read(path: String): BufferedInputStream {
		return BufferedInputStream(context.assets.open(path), 8192)
	}

	private fun decrypt(inputStream: InputStream?): InputStream {
		return CipherInputStream(inputStream, cipher)
	}

	private fun unzip(stream: InputStream?): ZipInputStream {
		val zipStream = ZipInputStream(stream)
		zipStream.nextEntry
		return zipStream
	}

	// https://stackoverflow.com/questions/35524662/android-write-file-to-assets-folder
	private fun writeDocument(path: String, data: Scanner) {
		val output = createFile(path, ".xml")

		val writer = FileWriter(output)
		while (data.hasNextLine()) writer.write(data.nextLine())

		data.close()
		writer.close()
	}

	private fun writeImage(path: String, data: ZipInputStream) {
		val bmp = BitmapFactory.decodeStream(data) ?: return

		val output = createFile(path, ".png")
		FileOutputStream(output).use { out ->
			bmp.compress(Bitmap.CompressFormat.PNG, 100, out)
		}
	}

	private fun createFile(path: String, ext: String): File {
		// /data/user/0/com.mohsen.muhammad.coptic.decrypter/files/decrypted_documents/...
		val outputPath = context.filesDir.absolutePath + "/" + path.replace("encrypted_", "decrypted_") + ext
		val output = File(outputPath)
		if (output.parentFile?.exists() != true) output.parentFile?.mkdirs()

		return output
	}
}
