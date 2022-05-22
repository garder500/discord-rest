# discord-rest

This module provides a Coverage of the REST API of the Discord API in Node.js. 

[![publish](https://github.com/garder500/discord-rest/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/garder500/discord-rest/actions/workflows/npm-publish.yml)
<span class="badge-npmversion"><a href="https://npmjs.org/package/discord-rest" title="View this project on NPM"><img src="https://img.shields.io/npm/v/discord-rest.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/discord-rest" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/discord-rest.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/garder500" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/bcbotcreator" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

Unlike discord.js, with discord-rest you can use the module on a website!

All modules are optional.

discord-rest comes with error prevention, and rate-limits, you won't be able to make mistakes!

Support is also planned soon for oauth2.

## Installation

with [npm](https://npmjs.org/):

```sh
npm install discord-rest
```

with [yarn](https://yarnpkg.com/):

```sh
yarn add discord-rest
```

## Usage

In TypeScript:

```ts
import Client from 'discord-rest';

const client = new Client({ token: 'token' });
```

```js
const Client = require('discord-rest');

const client = new Client({ token: 'token' });
```

## API

### Client

All methods in the Client class are static and provide access to alls Discord REST API endpoints.
