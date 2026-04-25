package com.fashionassistant.user.graphql

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery

@DgsComponent
class UserDataFetcher {

    @DgsQuery
    fun user(id: String): Map<String, Any?> {
        return mapOf(
            "id" to id,
            "email" to "user@example.com",
            "username" to "demo_user",
            "avatarUrl" to null
        )
    }

    @DgsQuery
    fun me(): Map<String, Any?> {
        return mapOf(
            "id" to "1",
            "email" to "me@example.com",
            "username" to "current_user",
            "avatarUrl" to null
        )
    }
}
