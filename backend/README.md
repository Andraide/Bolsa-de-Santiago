
# Ripley tech challenge for Cross team.

### To run the project:


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

>:four: start the service

```shell
minikube service angular-webapp
```


Build backend image
deployments
kubectl apply -f node-deployment.yaml
kubectl apply -f node-service.yaml

kubectl apply -f nginx-deployment.yaml

kubetlc appy -f mongo-deployment.yaml