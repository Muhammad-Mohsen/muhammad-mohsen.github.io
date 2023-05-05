package com.mohsen.muhammad.coptic.decrypter

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import com.mohsen.muhammad.coptic.decrypter.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.fabDoc.setOnClickListener {
            val decrypter = AssetDecrypter(this)
            decrypter.run()
        }

        binding.fabImg.setOnClickListener {
            val decrypter = AssetDecrypter(this)
            decrypter.run(AssetDecrypter.ENCRYPTED_IMAGES)
        }
    }

}