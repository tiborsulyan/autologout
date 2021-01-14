<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Http;

use Dflydev\FigCookies\FigResponseCookies;
use Dflydev\FigCookies\SetCookies;
use Psr\Http\Message\ResponseInterface;

class Rememberer
{
    const COOKIE_NAME = 'remember';
    const I_COOKIE_NAME = 'has_remember';

    /**
     * @var CookieFactory
     */
    protected $cookie;

    /**
     * @param CookieFactory $cookie
     */
    public function __construct(CookieFactory $cookie)
    {
        $this->cookie = $cookie;
    }

    public function remember(ResponseInterface $response, AccessToken $token)
    {
        $token->lifetime_seconds = 5 * 365 * 24 * 60 * 60; // 5 years
        $token->save();

        $has_remember_cookie = $this->cookie->make(self::I_COOKIE_NAME, "1", $token->lifetime_seconds)
            ->withHttpOnly(false);

        return SetCookies::fromResponse($response)
            ->with($has_remember_cookie)
            ->with($this->cookie->make(self::COOKIE_NAME, $token->token, $token->lifetime_seconds))
            ->renderIntoSetCookieHeader($response);
    }

    public function rememberUser(ResponseInterface $response, $userId)
    {
        $token = AccessToken::generate($userId);

        return $this->remember($response, $token);
    }

    public function forget(ResponseInterface $response)
    {
        $has_remember_cookie = $this->cookie->expire(self::I_COOKIE_NAME);
        $remember_cookie = $this->cookie->expire(self::COOKIE_NAME);

        return SetCookies::fromResponse($response)
            ->with($has_remember_cookie)
            ->with($remember_cookie)
            ->renderIntoSetCookieHeader($response);
    }
}
