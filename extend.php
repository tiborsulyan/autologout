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

            $lt = null;
            if (isset($event->settings['tiborsulyan-autologout.logoutAfter'])) {
                $lt = $event->settings['tiborsulyan-autologout.logoutAfter'];
            }
            $wt = null;
            if (isset($event->settings['tiborsulyan-autologout.warnAfter'])) {
                $wt = $event->settings['tiborsulyan-autologout.warnAfter'];
            }

            if (!$lt && $wt) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.logoutTimeoutNotSet')
                ]);
            }

            if ($lt && $wt && $wt >= $lt) {
                throw new ValidationException([
                    'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.warnTimeoutTooBig')
                ]);
            }

            if ($lt) {
                $sessionLifetime = app(ConfigRepository::class)->get("session.lifetime");
                if ($lt > $sessionLifetime) {
                    throw new ValidationException([
                        'autologout' => app('translator')->trans('tiborsulyan-autologout.admin.validation.logoutTimeoutTooBig', ['sessionLifetime' => $sessionLifetime])
                    ]);
                }
            }

        }),
];
