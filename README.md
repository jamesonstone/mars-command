# mars-command

API Gateway and Service Registry with OpenAPI

## Overview

A [blog](./docs/BLOG.md) accompanies this app.

## Endpoints

- `/services` - `GET` - List registered services
- `/register` - `POST` - register your service's openAPI spec as it comes online
- `/functions` - `GET` - List of available functionality of all services
- `/heartbeat` - `POST` - [Internal] registered service health check
