
# Ripley tech challenge for Cross team.

> To run the project:



> :one: Build the image

```shell
docker build -t username/image-name .
```
> :two: Start your cluster

```shell
minikube start
```

>:three: Run angular-webapp service

```shell
kubectl create -f manifest.yml
```