# Infomaniak paste

[![License][license]](https://github.com/Infomaniak/kpaste/blob/master/LICENSE)
[![Github issues][github-issues]](https://github.com/Infomaniak/kpaste/issues)
[![Github fork][github-fork]](https://github.com/Infomaniak/kpaste)
[![Github stars][github-stars]](https://github.com/Infomaniak/kpaste)
[![dependencies][dependencies-image] ][dependencies-url]
[![devdependencies][devdependencies-image] ][devdependencies-url]

[license]: https://img.shields.io/github/license/infomaniak/kpaste
[github-issues]: https://img.shields.io/github/issues/Infomaniak/kpaste
[github-fork]: https://img.shields.io/github/forks/Infomaniak/kpaste
[github-stars]: https://img.shields.io/github/stars/Infomaniak/kpaste
[dependencies-image]: https://david-dm.org/infomaniak/kpaste.svg
[dependencies-url]: https://david-dm.org/infomaniak/kpaste
[devdependencies-image]: https://david-dm.org/infomaniak/kpaste/dev-status.svg
[devdependencies-url]: https://david-dm.org/infomaniak/kpaste#info=devDependencies

Infomaniak Paste is a 100% secure solution for transferring your encrypted messages to all your contacts.

The data are encrypted and decrypted directly in your Internet browser via the 256-bit AES protocol using the Galois Counter mode.

## install

See `./.env.development` for the environment variables.

```bash
nvm use 19
npm i
```

## build dev

```bash
npm start
```

## build prod

```bash
npm run build
```

## Development Mode & Mocking

Since this project depends on private Infomaniak registries, a mocking strategy is used for local development.

You can toggle between the real dependency and the local mock using the following commands:

```bash
# Use local mock (updates package-lock.json to point to local files)
npm run mock:on

# Surgical Reset (restores the registry version while keeping other changes like new libraries)
npm run mock:off
```

### CORS & Proxy

To avoid CORS issues in development, the project uses a Vite proxy. The configuration is explicit in `.env.development`:

1. **`VITE_WEB_COMPONENT_API_ENDPOINT`**: Empty (`""`) to force the browser to use relative paths.
2. **`VITE_WEB_COMPONENT_API_ENDPOINT_PROXY`**: The actual target URL for the proxy.

```bash
nvm use 19
npm i
npm start
```

## k8s

folder `kubernetes`

## docker

folder `docker`

## cypress test

see `cypress` folder

## CI

- linter
- dependency check
- cypress
- docker image (nginx)
- docker image check

## precommit hook

there is a precommit hook based on eslint check

## common errors

localhost don't work because of https

this plugin automatically enables HTTPS for Vite development servers by generating self-signed SSL certificates.

```bash
npm install -D @vitejs/plugin-basic-ssl\n
```

in vite.config.ts

add BasicSsl :

```bash
import basicSsl from '@vitejs/plugin-basic-ssl'
```

defineConfig plugin :

```bash
  plugins: [
    react(),
    basicSsl({
      name: 'test',
      domains: ['*.custom.com'],
      certDir: '/Users/.../.devServer/cert'
    })
  ],
```
