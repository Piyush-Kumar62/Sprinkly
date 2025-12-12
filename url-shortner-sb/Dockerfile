# --- Stage 1: Build the Application ---
FROM eclipse-temurin:25-jdk-ubuntu AS build
WORKDIR /app

# Install Maven manually (Fixes the missing mvnw issue)
RUN apt-get update && apt-get install -y maven

# Copy project files
COPY pom.xml .
COPY src ./src

# Build the app using the system Maven
RUN mvn clean package -DskipTests

# --- Stage 2: Run the Application ---
FROM eclipse-temurin:25-jre-ubuntu
WORKDIR /app

# Copy the JAR
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Start App
ENTRYPOINT ["java", "-jar", "app.jar"]