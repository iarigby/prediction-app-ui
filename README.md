# Brest Cancer prediction app UI
## Run
```shell
docker run -p 3000:3000 ghcr.io/iarigby/prediction-app-ui:main
```

## Server Setup
```yaml
# add in existing services
 ui:
   image: ghcr.io/iarigby/prediction-app-ui:main
```
```nginx
upstream docker-webserver {
        server webserver:5050;
}

server { 
    location / {
            proxy_pass http://docker-ui/;
    }
}
```