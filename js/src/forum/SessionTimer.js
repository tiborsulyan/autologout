import ExpirationWarningModal from "./ExpirationWarningModal";

export default class SessionTimer {

    options;
    warnTimer;
    timeoutTimer;

    warn() {
        app.modal.show(ExpirationWarningModal, {remainingTimeMillis: this.options.logoutAfter - this.options.warnAfter});
    }

    timeout() {
        if (app.session.user) {
            app.session.logout();
        }
    }

    stop() {
        if (this.warnTimer) {
            clearTimeout(this.warnTimer);
            this.warnTimer = null;
        }

        if (this.timeoutTimer) {
            clearTimeout(this.timeoutTimer);
            this.timeoutTimer = null;
        }
    }

    start(options) {
        this.options = options;
        this.warnTimer = setTimeout(this.warn.bind(this), this.options.warnAfter);
        this.timeoutTimer = setTimeout(this.timeout.bind(this), this.options.logoutAfter);
    }

    restart(options) {
        this.stop();
        this.start(options);
    }

};