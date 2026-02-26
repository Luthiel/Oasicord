package config

import "os"

type Config struct {
	Port            string
	S3Bucket        string
	AWSRegion       string
}

func Load() *Config {
	return &Config{
		Port:      getEnv("PORT", "8087"),
		S3Bucket:  getEnv("S3_BUCKET", "fashion-media"),
		AWSRegion: getEnv("AWS_REGION", "us-east-1"),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
