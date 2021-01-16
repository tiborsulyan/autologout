import app from 'flarum/app';
import User from 'flarum/common/models/User';
import Page from 'flarum/components/Page';
import {extend} from 'flarum/extend';
import SessionTimer from "./SessionTimer";
import SessionDropdown from "flarum/components/SessionDropdown";

const autologoutEnabled = () => {
    return app.forum.attribute("tiborsulyan-autologout.logoutAfter") && !document.cookie.includes("flarum_has_remember=1");
};

const createOptions = () => {
    const sessionTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.logoutAfter");
    const warnTimeoutInMinutes = app.forum.attribute("tiborsulyan-autologout.warnAfter");
    if (warnTimeoutInMinutes) {
        return {
            logoutAfter: sessionTimeoutInMinutes * 60000,
            warnAfter: warnTimeoutInMinutes * 60000
        };
    } else {
        return {
            logoutAfter: sessionTimeoutInMinutes * 60000
        };
    }
};

const log = function(msg, ...args) {
    if (arguments.length === 1) {
        console.debug(msg);
    } else {
        console.debug(msg, args);
    }
};

app.initializers.add('tiborsulyan/autologout', () => {

    User.prototype.autoLogoutTimer = null;

    extend(Page.prototype, 'oninit', function () {
        if (app.session.user) {
            if (autologoutEnabled()) {
                if (!app.session.user.autoLogoutTimer) {
                    log("Auto Logout: initializing");
                    app.session.user.autoLogoutTimer = new SessionTimer(createOptions());
                }
                log("Auto Logout: updating expiration time (Page.oninit)");
                app.session.user.autoLogoutTimer.updateExpirationTime();
            } else {
                log("Auto Logout: not enabled", app.session.user);
                log("Has remember me feature?", document.cookie.includes("flarum_has_remember=1"));
            }
        }
    });

    extend(XMLHttpRequest.prototype, 'open', function () {
        this.addEventListener('load', function () {
            if (app.session.user && app.session.user.autoLogoutTimer) {
                log("Auto Logout: updating expiration time (XHR)");
                app.session.user.autoLogoutTimer.updateExpirationTime();
            }
        });
    });

    // TODO improve integration
    extend(SessionDropdown.prototype, 'items', function (items) {
        const originalLogout = items.get('logOut');
        const originalOnclick = originalLogout.attrs.onclick;
        originalLogout.attrs.onclick = () => {
            if (app.session.user && app.session.user.autoLogoutTimer) {
                log("Logout detected, stopping timer");
                app.session.user.autoLogoutTimer.stop();
            }
            originalOnclick();
        };
    });

});
