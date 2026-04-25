package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type Location struct {
	ID         string  `json:"id"`
	Name       string  `json:"name"`
	Latitude   float64 `json:"latitude"`
	Longitude  float64 `json:"longitude"`
	Category   string  `json:"category"`
	Rating     float64 `json:"rating"`
	DistanceKm float64 `json:"distance_km"`
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8088"
	}

	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"service": "location-service",
		})
	})

	r.GET("/locations/nearby", func(c *gin.Context) {
		locations := []Location{
			{
				ID:         "loc-1",
				Name:       "Central Park",
				Latitude:   40.785091,
				Longitude:  -73.968285,
				Category:   "park",
				Rating:     4.8,
				DistanceKm: 1.2,
			},
			{
				ID:         "loc-2",
				Name:       "Art District Cafe",
				Latitude:   40.740000,
				Longitude:  -73.990000,
				Category:   "cafe",
				Rating:     4.5,
				DistanceKm: 2.5,
			},
		}
		c.JSON(http.StatusOK, locations)
	})

	r.GET("/locations/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, Location{
			ID:         id,
			Name:       "Sample Location",
			Latitude:   0.0,
			Longitude:  0.0,
			Category:   "unknown",
			Rating:     0.0,
			DistanceKm: 0.0,
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

type Location struct {
	ID         string  `json:"id"`
	Name       string  `json:"name"`
	Latitude   float64 `json:"latitude"`
	Longitude  float64 `json:"longitude"`
	Category   string  `json:"category"`
	Rating     float64 `json:"rating"`
	DistanceKm float64 `json:"distance_km"`
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8088"
	}

	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"service": "location-service",
		})
	})

	r.GET("/locations/nearby", func(c *gin.Context) {
		locations := []Location{
			{
				ID:         "loc-1",
				Name:       "Central Park",
				Latitude:   40.785091,
				Longitude:  -73.968285,
				Category:   "park",
				Rating:     4.8,
				DistanceKm: 1.2,
			},
			{
				ID:         "loc-2",
				Name:       "Art District Cafe",
				Latitude:   40.740000,
				Longitude:  -73.990000,
				Category:   "cafe",
				Rating:     4.5,
				DistanceKm: 2.5,
			},
		}
		c.JSON(http.StatusOK, locations)
	})

	r.GET("/locations/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(http.StatusOK, Location{
			ID:         id,
			Name:       "Sample Location",
			Latitude:   0.0,
			Longitude:  0.0,
			Category:   "unknown",
			Rating:     0.0,
			DistanceKm: 0.0,
		})
	})

	r.Run(":" + port)
}
