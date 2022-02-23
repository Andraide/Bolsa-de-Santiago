
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

>:four: visit [link](http://localhost)

### To run the project without a cluster:

> :one: Start your mongodb

```shell
mongod
```

> :two: Install the depencies and start the server

```shell
cd backend && npm i && npm start
```

>:three: Intall the depencies for the frontend

```shell
cd frontend && npm i && npm start
```

>:four: visit [link](http://localhost:4200)