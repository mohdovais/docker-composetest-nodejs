
# Get started with Docker Compose

[[source](https://docs.docker.com/compose/gettingstarted/)]

## Docker Machine on a Mac or Windows

Use docker-machine ip MACHINE_VM to get the IP address of your Docker host. Then, open http://MACHINE_VM_IP:5000 in a browser.

```
docker-machine ip MACHINE_VM
```

## Build and run application with Compose
```
docker-compose up -d
```

## Stop the application
```
docker-compose down
```

## Bring everything down, removing the containers entirely
```
docker-compose down --volumes

## List volumes
```
docker volume ls
```

## Remove one or more volumes
```
docker volume rm VOLUME_NAME
```

## Remove all volumes

```
docker volume prune
```

### Display detailed information on one or more volumes
```
$ docker volume inspect composetest-nodejs_composetest
```
```json
[
    {
        "CreatedAt": "2020-02-12T07:07:27Z",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "composetest-nodejs",
            "com.docker.compose.version": "1.24.1",
            "com.docker.compose.volume": "composetest"
        },
        "Mountpoint": "/mnt/sda1/var/lib/docker/volumes/composetest-nodejs_composetest/_data",
        "Name": "composetest-nodejs_composetest",
        "Options": null,
        "Scope": "local"
    }
]
```
