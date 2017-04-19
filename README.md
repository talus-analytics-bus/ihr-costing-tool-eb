# ihr-costing-tool
Prototype user interface for the IHR Costing Tool

## Developing with Docker
This app can be run in development mode with [Docker](https://www.docker.com/get-docker).

Build image
```sh
make build-image
```

Start the services
```sh
make docker-start
```
Webapp is at `localhost:3000`. Express server is at `localhost:9500`. Mongo db can be accessed through port `27017`

Stop all services
```sh
make docker-end
```

## Getting Started
Install yarn globally.
```sh
npm install -g yarn
```

Install the package dependencies.
```sh
yarn
```

Run in development mode.
```sh
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

Run the test watcher in interactive mode.
```sh
yarn test
```

Build the app for production.
```sh
yarn build
```
