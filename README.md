# On Movies

## 🚀Getting Started

On Movie is a lightweight web application that uses a MongoDB-powered Movie API to display engaging information about popular movies.

See Installing for steps to make it work in your local environment.

## 💻 Live Demo

https://on-movies-on.netlify.app/

## 📋 Prerequisites

[Node JS](https://nodejs.org/) - You need it to use yarn
[Angular CLI](https://angular.io/cli) - Command-line interface tool needed to manage Angular applications
[NestJS CLI](https://angular.io/cli) - Command-line interface tool needed to manage the backend
[The Movie DB API](https://cloud.mongodb.com/) - Click the link to get your own API

### 1. Clone the repository

```bash
git clone https://github.com/oussamanachmi/on-movies.git
cd on-movies
```

### 2. Install dependencies

For the client (Angular app):

```bash
cd client
yarn install
```

For the server (NestJS API):

```bash
cd ../server/on-movies
yarn install
```

Go to on-movies\src\environments and change environments.ts and environments.prod.ts moviesApi object prop with your own The Movie DB API Key.

### 3. Run the applications

Start the Angular client:

```bash
cd ../../client
yarn run start
```

Start the NestJS server:

```bash
cd ../server/on-movies
yarn run start:dev
```

## 🛠️ Built With

[Angular](https://angular.io/) 19.2.0 - The Web Framework used
[Bootstrap](https://getbootstrap.com/) 5.3.7 - The UI Component Library

Now, open your browser at `http://localhost:4200/` for the client app and ensure your server is running for API requests and enjoy it.
