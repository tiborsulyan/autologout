import app from 'flarum/app';
import User from 'flarum/common/models/User';
import Page from 'flarum/components/Page';
import {extend} from 'flarum/extend';
import SessionTimer from "./SessionTimer";

function createOptions() {
    const sessionTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.logoutAfter") || 120;
    const warnTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.warnAfter") || 115;
    return {
        logoutAfter: sessionTimeoutInMinutes * 60000 - 10000,
        warnAfter: warnTimeoutInMinutes * 60000 - 10000
    };
}

app.initializers.add('tiborsulyan/autologout', () => {

    User.prototype.autoLogoutTimer = null;

    extend(Page.prototype, 'oninit', function () {
        if (app.session.user) {
            if (!app.session.user.autoLogoutTimer) {
                app.session.user.autoLogoutTimer = new SessionTimer();
                app.session.user.autoLogoutTimer.start(createOptions());
            } else {
                app.session.user.autoLogoutTimer.restart(createOptions());
            }
        }
    });

    extend(XMLHttpRequest.prototype, 'open', function () {
        this.addEventListener('load', function () {
            if (app.session.user && app.session.user.autoLogoutTimer) {
                app.session.user.autoLogoutTimer.restart(createOptions());
            }
        });
    });

});
