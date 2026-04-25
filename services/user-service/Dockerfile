FROM gradle:8-jdk17 AS builder
WORKDIR /app
COPY build.gradle.kts settings.gradle.kts ./
COPY gradle/ ./gradle/
COPY src/ ./src/
RUN gradle build -x test --no-daemon

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
