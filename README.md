
# Ripley tech challenge for Cross team.

### To run the project on a cluster:


> :one: Start your cluster

```shell
minikube start
```

>:two: Apply kubernetes objects

```shell
kubectl apply -f manifest.yaml
```

>:three: tunnel the services

```shell
minikube tunnel
```

>:four: visit [link](http://localhost) http://localhost

### To run the project without a cluster:

> :one: Start your mongodb and switch mongo url on index.s file
```shell
mongo url => mongodb://127.0.0.1:27017/test
```

```shell
mongod
```

> :two: Install the dependecies and start the server

```shell
cd backend && npm i && npm start
```

>:three: Intall the dependecies for the frontend

```shell
cd frontend && npm i && npm start
```

>:four: visit [link](http://localhost:4200) http://localhost:4200