# discord-rest

This module provides a Coverage of the REST API of the Discord API in Node.js. 

[![publish](https://github.com/garder500/discord-rest/actions/workflows/docs-generator.yml/badge.svg)](https://github.com/garder500/discord-rest/actions/workflows/npm-publish.yml)
<span class="badge-npmversion"><a href="https://npmjs.org/package/discord-rest" title="View this project on NPM"><img src="https://img.shields.io/npm/v/discord-rest.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/discord-rest" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/discord-rest.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/garder500" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/bcbotcreator" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

Discord-rest is a wrapper for the Discord REST API, in usage on Discord Slash Commands, Webhooks, and more.
Support is also planned soon for oauth2.

## Thing to know

- Discord-rest is not a library similar to Discord.js, you can't connect a bot with it.
- Discord-rest is made for WebSite backends, and Webhooks endpoints for slash commands.
- You can't use in the browser, but you can use it in Node.js with the [`node-fetch`](https://npmjs.com/package/node-fetch) module or with the window.fetch() function in some React environments that expose it.
- Discord-rest don't have a cache system, because it's not used for a long time usage. 

## Go to the documentation

[Documentation](https://discord-rest.js.org/)