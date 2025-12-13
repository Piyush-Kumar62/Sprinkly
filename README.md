<a name="readme-top"></a>

<div align="center">
  <img src="url-shortener-react/public/vite.svg" alt="logo" width="100" height="auto" />
  <h1>Sprinkly 🔗</h1>
  
  <p>
    A modern, full-stack URL shortener built for scale and performance.
  </p>
  
  
<p>
  <a href="https://sprinkly-frontend.vercel.app">
    <img src="https://img.shields.io/badge/Frontend-Live%20On%20Vercel-black?style=for-the-badge&logo=vercel" alt="Frontend Live" />
  </a>
  <a href="https://sprinkly-backend.onrender.com">
    <img src="https://img.shields.io/badge/Backend-Live%20On%20Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Backend Live" />
  </a>
</p>

<p>
  <a href="https://github.com/Piyush-Kumar62/Sprinkly/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/Piyush-Kumar62/Sprinkly/production-ci.yml?style=flat-square&label=CI%20Pipeline" alt="CI Status" />
  </a>
  <img src="https://img.shields.io/github/license/Piyush-Kumar62/Sprinkly?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/stars/Piyush-Kumar62/Sprinkly?style=flat-square" alt="Stars" />
</p>

<h4>
    <a href="https://sprinkly-frontend.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Piyush-Kumar62/Sprinkly/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Piyush-Kumar62/Sprinkly/issues">Request Feature</a>
</h4>
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

## 🚀 About The Project

**Sprinkly** is more than just a URL shortener; it's a full-featured link management platform. It allows users to convert long, messy URLs into concise, shareable links while providing detailed analytics on click performance.

<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/cffa9151-a91a-4304-bd96-fc32737bd064" />


### 🌟 Key Features
* **🔐 Secure Authentication:** JWT-based stateless authentication with BCrypt password hashing.
* **📊 Real-time Analytics:** Visual graphs (Chart.js) showing click-through rates and engagement.
* **⚡ High Performance:** Optimized database queries and responsive React frontend.
* **📱 Fully Responsive:** Seamless experience across desktop, tablet, and mobile.
* **☁️ Cloud Native:** Dockerized backend and auto-scaling cloud deployment.

---

## 🛠️ Tech Stack

This project uses a modern, industry-standard stack focused on scalability and developer experience.

| Domain | Technology |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) |
| **Backend** | ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=flat&logo=spring&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=flat&logo=spring-boot) |
| **Database** | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) ![Neon](https://img.shields.io/badge/Neon-00E599?style=flat&logo=neon&logoColor=black) |
| **DevOps** | ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=flat&logo=render&logoColor=white) |

---

## 🏗️ Architecture

The system follows a **Layered Architecture** to separate concerns and ensure maintainability.

1.  **Presentation Layer:** React Frontend consumes REST APIs.
2.  **Controller Layer:** Spring Boot Controllers (`AuthController`, `UrlMappingController`) handle HTTP requests.
3.  **Service Layer:** Business logic (URL shortening algorithm, Analytics processing).
4.  **Data Access Layer:** Spring Data JPA repositories interact with the PostgreSQL database.

---

## ⚡ Getting Started

You can run Sprinkly locally using **Docker** (Recommended) or manually.

### Prerequisites
* Java 21 or 25
* Node.js v18+
* PostgreSQL (Local or Neon Cloud)

### Option 1: Manual Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Piyush-Kumar62/Sprinkly.git](https://github.com/Piyush-Kumar62/Sprinkly.git)
    cd Sprinkly
    ```

2.  **Backend Setup**
    * Navigate to backend: `cd url-shortner-sb`
    * Update `src/main/resources/application.properties` with your DB creds.
    * Run app:
        ```bash
        ./mvnw spring-boot:run
        ```

3.  **Frontend Setup**
    * Navigate to frontend: `cd ../url-shortener-react`
    * Install dependencies: `npm install`
    * Start server: `npm run dev`

---

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login & get JWT Token | Public |
| `POST` | `/api/url/shorten` | Shorten a long URL | **Auth Required** |
| `GET` | `/api/url/myurls` | Get user's URL history | **Auth Required** |
| `GET` | `/api/url/analytics/{shortLink}` | Get click analytics | **Auth Required** |
| `GET` | `/{shortLink}` | Redirect to original URL | Public |

---

## 🛣️ Roadmap

- [x] Basic URL Shortening
- [x] User Authentication (JWT)
- [x] Click Analytics Dashboard
- [ ] QR Code Generation for links
- [ ] Custom Aliases (e.g., `sprink.ly/my-custom-name`)
- [ ] Export Analytics to CSV/PDF

---

## 📬 Contact

**Piyush Kumar** Full Stack Developer | Cloud Enthusiast

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/piyush-kumar-5362)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Piyush-Kumar62)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
