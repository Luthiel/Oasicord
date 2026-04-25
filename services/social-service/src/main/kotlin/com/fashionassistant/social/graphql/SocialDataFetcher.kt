package com.fashionassistant.social.graphql

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery

@DgsComponent
class SocialDataFetcher {

    @DgsQuery
    fun socialFeed(limit: Int?, offset: Int?): List<Map<String, Any?>> {
        return listOf(
            mapOf(
                "id" to "post-1",
                "userId" to "1",
                "outfitId" to "outfit-1",
                "caption" to "Sample outfit post",
                "mediaUrls" to listOf<String>(),
                "likesCount" to 0,
                "commentsCount" to 0,
                "createdAt" to "2024-01-01T00:00:00Z"
            )
        )
    }
}
