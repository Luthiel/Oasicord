package com.fashionassistant.wardrobe.graphql

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery

@DgsComponent
class WardrobeDataFetcher {

    @DgsQuery
    fun wardrobeItems(userId: String?): List<Map<String, Any?>> {
        return listOf(
            mapOf(
                "id" to "sample-1",
                "userId" to (userId ?: "1"),
                "name" to "Sample Jacket",
                "category" to "outerwear",
                "tags" to listOf("casual", "denim"),
                "colors" to listOf("#4A90E2"),
                "season" to listOf("spring", "fall"),
                "imageUrl" to "",
                "model3dUrl" to null
            )
        )
    }
}
