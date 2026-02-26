package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8087"
	}

	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"service": "media-storage",
		})
	})

	r.POST("/upload", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"id":  "media-stub-001",
			"url": "https://placeholder.example.com/media/stub.jpg",
		})
	})

	r.GET("/media/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, gin.H{
			"id":  id,
			"url": "https://placeholder.example.com/media/" + id,
		})
	})

	r.Run(":" + port)
}
package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8087"
	}

	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"service": "media-storage",
		})
	})

	r.POST("/upload", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"id":  "media-stub-001",
			"url": "https://placeholder.example.com/media/stub.jpg",
		})
	})

	r.GET("/media/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, gin.H{
			"id":  id,
			"url": "https://placeholder.example.com/media/" + id,
		})
	})

	r.Run(":" + port)
}
