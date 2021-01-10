import ExpirationWarningModal from "./ExpirationWarningModal";

export default class SessionTimer {

    options;
    warnTimer;
    timeoutTimer;

    warn() {
        console.log("Timeout warning!");
        app.modal.show(ExpirationWarningModal, {remainingTimeMillis: this.options.timeoutAfter - this.options.warnAfter});
    }

    timeout() {
        if (app.session.user) {
            console.log("Logging out");
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
        this.timeoutTimer = setTimeout(this.timeout.bind(this), this.options.timeoutAfter);
    }

    restart(options) {
        this.stop();
        this.start(options);
    }

};