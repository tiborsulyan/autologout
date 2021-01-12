# Auto Logout

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/tiborsulyan/autologout.svg)](https://packagist.org/packages/tiborsulyan/autologout)

This extension can automatically log out users after a configured inactivity period.
Also, it can display a session timeout warning with options to stay logged in or logout if configured. 

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

Enable the extension and set the timeouts in the settings

### TODO

- Handle timeout in the admin area
- Better integration with logout
- Test compatibility with beta 14
- Fix validation of settings

### Links

- [Packagist](https://packagist.org/packages/tiborsulyan/autologout)
- [Source code on GitHub](https://github.com/tiborsulyan/autologout)
- [Report an issue](https://github.com/tiborsulyan/autologout/issues)
