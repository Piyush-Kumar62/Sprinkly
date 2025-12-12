# --------------------------------------------------------
# STAGE 1: Build the application
# --------------------------------------------------------
FROM eclipse-temurin:25-jdk AS build

WORKDIR /app

# Copy Maven wrapper and Project Config
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Fix Windows line endings in the wrapper script (Crucial for Render/Linux)
RUN sed -i 's/\r$//' mvnw
RUN chmod +x mvnw

# Download dependencies (Cached layer)
RUN ./mvnw dependency:go-offline

# Copy Source and Build
COPY src ./src
RUN ./mvnw clean package -DskipTests

# --------------------------------------------------------
# STAGE 2: Run the application
# --------------------------------------------------------
FROM eclipse-temurin:25-jre

WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]