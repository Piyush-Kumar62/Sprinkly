# --- Stage 1: Build the Application ---
# Use the official Maven image with Java 21 (Stable & includes Maven)
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy project files
COPY pom.xml .
COPY src ./src

# Build the app (Use 'mvn', not './mvnw')
RUN mvn clean package -DskipTests

# --- Stage 2: Run the Application ---
# Use the official Java 21 Runtime (Lightweight)
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copy the JAR
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Start App
ENTRYPOINT ["java", "-jar", "app.jar"]