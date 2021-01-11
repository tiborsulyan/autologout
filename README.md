# Auto Logout

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/tiborsulyan/autologout.svg)](https://packagist.org/packages/tiborsulyan/autologout)

A [Flarum](http://flarum.org) extension. Warn the user before session timeout and performs a logout when the timeout expires.

### Installation

Install manually with composer:

```sh
composer require tiborsulyan/autologout
```

### Updating

```sh
composer update tiborsulyan/autologout
php flarum cache:clear
```

### Usage

Enable the extension and set the logout timeout in the settings.
Optionally, a warning timeout can also be set to warn the user before session expiration and allow extension of the session

### TODO

- Handle timeout in the admin area

### Links

- [Packagist](https://packagist.org/packages/tiborsulyan/autologout)
- [Source code on GitHub](https://github.com/tiborsulyan/autologout)
- [Report an issue](https://github.com/tiborsulyan/autologout/issues)
