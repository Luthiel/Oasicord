package com.fashionassistant.wardrobe

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WardrobeServiceApplication

fun main(args: Array<String>) {
    runApplication<WardrobeServiceApplication>(*args)
}
