# Auto Logout

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/tiborsulyan/autologout.svg)](https://packagist.org/packages/tiborsulyan/autologout)

A [Flarum](http://flarum.org) extension. Warn and automatically log out users after a configured inactivity period.

Features:
- Log out user automatically after a configurable inactivity period
- Optionally display a warning modal for the user about the session expiration with options to stay signed in and logout

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

Enable the extension and set the timeouts in the admin area

### TODO

- Handle timeout in the admin area
- Better integration with Flarum's native logout feature
- Fix validation of settings

### Links

- [Packagist](https://packagist.org/packages/tiborsulyan/autologout)
- [Source code on GitHub](https://github.com/tiborsulyan/autologout)
- [Report an issue](https://github.com/tiborsulyan/autologout/issues)
