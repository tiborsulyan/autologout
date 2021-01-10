<?php

/*
 * This file is part of tiborsulyan/autologout.
 *
 * Copyright (c) 2021 stibi.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Tiborsulyan\Autologout;

use Flarum\Foundation\ValidationException;
use Flarum\Settings\Event\Saving;
use Flarum\Extend;
use Illuminate\Config\Repository as ConfigRepository;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Settings)
        ->serializeToForum('tiborsulyan-autologout.logoutAfter', 'tiborsulyan-autologout.logoutAfter')
        ->serializeToForum('tiborsulyan-autologout.warnAfter', 'tiborsulyan-autologout.warnAfter'),

    (new Extend\Routes('api'))
        ->post('/keepalive', 'tiborsulyan.autologout.keepalive', KeepaliveController::class),

    (new Extend\Event())
        ->listen(Saving::class, function (Saving $event) {

            if (!isset($event->settings['tiborsulyan-autologout.logoutAfter'])) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.logoutTimeoutNotSet')
                ]);
            }
            $logoutAfter = $event->settings['tiborsulyan-autologout.logoutAfter'];

            if (!isset($event->settings['tiborsulyan-autologout.warnAfter'])) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.warnTimeoutNotSet')
                ]);
            }
            $warnAfter = isset($event->settings['tiborsulyan-autologout.warnAfter']);

            $sessionLifetime = app(ConfigRepository::class)->get("session.lifetime");
            if ($logoutAfter > $sessionLifetime) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.logoutTimeoutTooBig', ['sessionLifetime' => $sessionLifetime])
                ]);
            }

            if ($logoutAfter <= $warnAfter) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.warnTimeoutTooBig')
                ]);
            }
        }),
];
