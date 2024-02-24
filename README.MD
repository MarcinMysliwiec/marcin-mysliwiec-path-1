
## Table of Contents
- [Table of Contents](#table-of-contents)
- [Use Docker to Create Image and Container](#use-docker-to-create-image-and-container)
- [Run App Locally using npm or yarn](#run-app-locally-using-npm-or-yarn)
  - [Install Dependencies](#install-dependencies)
  - [Run in Development Environment](#run-in-development-environment)
  - [Build and Start Locally](#build-and-start-locally)

---

## Use Docker to Create Image and Container
To deploy the application using Docker, follow these steps:

1. Create a Docker image using the provided Dockerfile. Ensure Docker is installed on your system.
```
docker build -t your-image-name .
```
2. Once the image is built successfully, you can create and run a container:
```
docker run -p 3000:3000 your-image-name
```
Now, your application should be up and running inside the Docker container. You can access it at `http://localhost:3000`.

## Run App Locally using npm or yarn

### Install Dependencies
To run the application locally, you'll need to install its dependencies. You can do this using either npm or yarn. Navigate to the root directory of the project and execute:

```bash
npm install
# Or
yarn install
```

### Run in Development Environment
For development purposes, you can use `nodemon` to automatically restart the server when changes are detected. Run the following command:
```
npm run dev
# Or
yarn dev
```
### Build and Start Locally
```
npm run build
# Or
yarn build
```
Once the build is complete, you can start the application locally using:
```
npm start
# Or
yarn start
```
Now, your application should be up and running inside the Docker container. You can access it at `http://localhost:3000`.
