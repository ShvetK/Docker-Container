# Docker

- _Date Created_: 16 March, 2023

## Author

- [Shvet Kantibhai Anaghan](shvetanaghan28@gmail.com)

## Getting Started

Build two simple webapp containers that communicate to each other through a docker network to provide more complex functionality, a very small microservice architecture.

- The first container's role is to serve as an orchestrator and gatekeeper, making sure that the input into the system is clean and valid. Also it Send the "file" parameter to container 2 and return the response from container 2.

- The second container's role is to listen on another port and endpoint that define within docker network for requests to calculate MD5 checksums. It load the file into memory.Calculate an MD5 checksum hash for the file and Return the checksum in the appropriate JSON format.

```
DockerHub Container 1 :- docker pull shvetanaghan/app1
```

```
DockerHub Container 2 :- docker pull shvetanaghan/app2
```

- I also prepareed a docker-compose.yml file that defines a docker network and runs the
  two containers from dockerhub deploy.

### Prerequisites

Git needs to be installed on your machine.
The first step is to clone the tutorial repo in your machine using the below command.

```
git clone https://github.com/ShvetK/Docker-Container.git
```

You need the tools/libraries/software below to run this project on your machine.

- [VS Code](https://code.visualstudio.com/)
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Express](https://reactjs.org/)
- [Nodemon](https://nodemon.io/) (optional)

## Built With

- [Node](https://nodejs.org/en/) & [Express](https://reactjs.org/) - The back-end framework used to manage servers and routes.
