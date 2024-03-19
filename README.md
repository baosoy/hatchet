This is an example repo of how to setup [Hatchet](http://hatchet.run) on [Northflank](https://northflank.com), with an example worker setup and configured to go.

## How to use it

1. Copy this repository and upload it to your own Github
2. Create an account on Northflank and connect your Github account
3. Create a new template, enable GitOps, and connect to your newly created repo.
4. Apply argument overrides using the arguments listed below
5. Update the Caddyfile to use your domain
6. Add the Caddyfile to the secret files for the Caddy container (under Environment Variables)
7. Run the deploy.

## Limitations

Because Northflank does not expose TCP ports for containers, you are only able to connect to workers inside of your Northflank project.

## Arguments

Currently I've not found a good way to automate the generation of these as Hatchet runs these as part of its scripts. But if you run the docker compose file locally, you can steal the keys generated from there.

```json
"SERVER_ENCRYPTION_JWT_PRIVATE_KEYSET" : "",
"SERVER_ENCRYPTION_JWT_PUBLIC_KEYSET": "",
"SERVER_ENCRYPTION_MASTER_KEYSET": "",
"SERVER_AUTH_COOKIE_SECRETS": "",
"SERVER_AUTH_COOKIE_DOMAIN": "",
"ADMIN_EMAIL": "",
"ADMIN_PASSWORD": "",
"ADMIN_NAME": "",
"DEFAULT_TENANT_NAME" : "",
"DEFAULT_TENANT_SLUG": ""
```

## Deploying the example worker

This is a monorepo structure which includes an example of how to deploy a worker. If you navigate to `workers/example` you'll see the same worker as in the [Getting Started](https://docs.hatchet.run/self-hosting/docker-compose#run-your-first-worker) page. Before deploying this, make sure you log into your Hatchet client and generate an API token. To deploy this you can:

1. Create a new service in Northflank
2. Point it to the hatchet repository
3. Use a Docker file
4. Keep the build context as `/` but update the Dockerfile location to `/workers/example/Dockerfile` and hit verify
5. Add the following environment variables

```
HATCHET_CLIENT_TOKEN="<token>"
HATCHET_CLIENT_TLS_STRATEGY=none
```
