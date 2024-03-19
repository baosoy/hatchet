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
