# Backend - Client

## Introduction

This project is the backend of the contacts management client.

## Instructions

First, install the dependencies with `yarn` or `npm`.

```
$ yarn # or npm i
```

Then, set the client's host URL in the `.env` file (for CORS).

```
# .env

CLIENT_HOST="http://localhost:2000"
```

Finally, start the server (on port 3000 by default).

```
$ yarn dev
```

## `.env`

| Name               | Type   | Description                                                                        |
| ------------------ | ------ | ---------------------------------------------------------------------------------- |
| `PORT`             | number | Server port                                                                        |
| `CLIENT_HOST`      | string | Client's host URL (to enable CORS)                                                 |
| `WAIT_MSEC`        | number | The time to wait before a request is performed (for testing purposes)              |
| `NB_FAKE_CONTACTS` | number | Number of fake contacts created when the server is launched (for testing purposes) |
