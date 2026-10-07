# agileICT: headhunting platform for ICT professionals

A full-stack web platform that connects ICT professionals with companies. Professionals publish their profile and say whether they are open to offers. Companies sign up, choose a subscription plan and describe the profile they are looking for.

Built by a 5-person Scrum team for *Telematic Systems & Services Engineering* (ISST), B.Eng. in Telecommunication Technologies and Services, Universidad Politécnica de Madrid (spring 2025).

▶ **[Demo video](https://youtu.be/o9tevRGyyHM)**

## Features

- Role-based sign-up for **professionals** and **companies**, with subscription plan selection
- Login and session handling (log in / log out from the navbar)
- Professional profile: view, **edit** and toggle "open to offers" availability
- **Search requests**: a company describes the professional it needs (type, availability, experience level, key skills, detailed description) and the request is stored and listed through the API

## Tech stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot 3.4, Spring Data JPA, Maven |
| Database | H2 (file-based, `~/agileICT`) |
| Frontend | React 19, React Router, Vite, Axios |
| Process | Scrum, user stories, UML |

## Architecture

```
React SPA (Vite, :5173)  --HTTP/JSON-->  Spring Boot REST API (:8080)  --JPA-->  H2 database
```

Backend packages under `agileICT/src/main/java/es/upm/dit/isst/agileICT/`:

- `entity/`: `Professional`, `Company`, `Busqueda` (search request, many-to-one with `Company`)
- `repository/`: Spring Data JPA repositories
- `controller/`: REST controllers

### REST API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/professionals/register` | Register a professional |
| GET | `/api/professionals/{id}` | Get a professional profile |
| PUT | `/api/professionals/{id}` | Update a professional profile |
| POST | `/api/companies/register` | Register a company |
| POST | `/api/login` | Log in (professional or company) |
| POST | `/busquedas/registrar` | Create a search request for a company |
| GET | `/busquedas` | List search requests |

## Running locally

Requirements: JDK 17+, Node.js 18+.

```bash
# Backend (http://localhost:8080)
cd agileICT
./mvnw spring-boot:run

# Frontend (http://localhost:5173), in another terminal
cd agileICT/frontend
npm install
npm run dev
```

H2 console: http://localhost:8080/h2-console (JDBC URL `jdbc:h2:file:~/agileICT`, user `sa`, empty password).

## Team

María Barragán Gámiz, Elena Barrio Maceira, Sandra González Chamoso, Gonzalo Leis Varela and Juan Diego Molero García-Morato.

The full commit history of the team repository is preserved here. My contributions (Gonzalo Leis Varela):

- **Professional profile update API**: `PUT /api/professionals/{id}` and the related changes to the `Professional` entity
- **Search requests**: the `Busqueda` entity and repository, the `/busquedas` endpoints, and the company search form in `InicioEmpresa.jsx`
- UI mockups, UML diagrams and user stories during the Scrum sprints

## Known limitations

This is a course prototype: passwords are stored in plain text and the company ID in the search form is hard-coded for testing. Matching search requests to professionals was not implemented.
