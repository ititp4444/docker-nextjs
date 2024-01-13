### base compose run

```
$ docker compose -f docker-compose.base.yml run --rm base
$ docker compose -f docker-compose.base.yml run --rm installer
```

### dev compose up

```
$ docker compose -f docker-compose.dev.yml build --no-cache
$ docker compose -f docker-compose.dev.yml up -d
```

```
$ docker exec -it next-app sh
# npm i
```
