import app from 'flarum/app';
import User from 'flarum/common/models/User';
import Page from 'flarum/components/Page';
import {extend} from 'flarum/extend';
import SessionTimer from "./SessionTimer";
import SessionDropdown from "flarum/components/SessionDropdown";

const createOptions = () => {
    const sessionTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.logoutAfter") || 120;
    const warnTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.warnAfter");
    if (warnTimeoutInMinutes) {
        return {
            logoutAfter: /*sessionTimeoutInMinutes * 60000 - 5000*/60000,
            warnAfter: /*warnTimeoutInMinutes * 60000 - 5000*/30000
        };
    } else {
        return {
            logoutAfter: sessionTimeoutInMinutes * 60000 - 5000
        };
    }
};

app.initializers.add('tiborsulyan/autologout', () => {

    User.prototype.autoLogoutTimer = null;

    extend(Page.prototype, 'oninit', function () {
        if (app.session.user) {
            if (!app.session.user.autoLogoutTimer) {
                app.session.user.autoLogoutTimer = new SessionTimer(createOptions());
            }

            app.session.user.autoLogoutTimer.updateExpirationTime();

        }
    });

    extend(XMLHttpRequest.prototype, 'open', function () {
        this.addEventListener('load', function () {
            if (app.session.user && app.session.user.autoLogoutTimer) {
                app.session.user.autoLogoutTimer.updateExpirationTime();
            }
        });
    });

    extend(SessionDropdown.prototype, 'items', function (items) {
        const originalLogout = items.get('logOut');
        const originalOnclick = originalLogout.attrs.onclick;
        originalLogout.attrs.onclick = () => {
            if (app.session.user && app.session.user.autoLogoutTimer) {
                app.session.user.autoLogoutTimer.stop();
            }
            originalOnclick();
        };
    });

});
