# React Client + Node Server + Docker Compose
## A project that runs a simple Node server and a React app client via two separate containers, using Docker Compose.

The `server/` and `client/` directories have their own docker containers, which are configured via the `docker-compose.yml` file.

The client server is spin up at `3000` port and it proxies internally to the server using the linked name as `server:8080`.

### Using docker compose

Start with command:
```
docker-compose up

# or detached
docker-compose up -d
```

Check status:
```
docker-compose ps
```

Stop:
```
docker-compose down
```
