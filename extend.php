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

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Settings)
        ->serializeToForum('tiborsulyan-autologout.timeoutAfter', 'tiborsulyan-autologout.timeoutAfter')
        ->serializeToForum('tiborsulyan-autologout.warnAfter', 'tiborsulyan-autologout.warnAfter'),

    (new Extend\Routes('api'))
        ->post('/keepalive', 'tiborsulyan.autologout.keepalive', KeepaliveController::class),

/*
array (
 'tiborsulyan-autologout.timeoutAfter' => '5',
 'tiborsulyan-autologout.warnAfter' => '2',
)
 */
//    (new Extend\Event())
//        ->listen(Saving::class, function (Saving $event) {
//            throw new ValidationException([
//                var_export($event->settings, true)
//            ]);
//        }),
];
