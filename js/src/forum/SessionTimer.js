import ExpirationWarningModal from "./ExpirationWarningModal";
import app from 'flarum/app';

export default class SessionTimer {

    options;
    warnTimer;
    logoutTimer;
    storageListener;
    lastUpdate = 0;

    constructor(options) {
        this.options = options;
        this.warnTimer = null;
        this.logoutTimer = null;
        this.storageListener = this.expirationTimeUpdated.bind(this);
        window.addEventListener('storage', this.storageListener);
    }

    warn() {
        app.modal.show(ExpirationWarningModal, {remainingTimeMillis: this.options.logoutAfter - this.options.warnAfter});
    }

    storageKey() {
        return "tiborsulyan.autologout";
    }

    logout() {
        if (app.session.user) {
            this.stop();
            localStorage.clear();
            app.session.logout();
        }
    }

    stopTimers() {
        if (this.warnTimer) {
            clearTimeout(this.warnTimer);
            this.warnTimer = null;
        }

        if (this.logoutTimer) {
            clearTimeout(this.logoutTimer);
            this.logoutTimer = null;
        }
    }

    removeStorageListener() {
        window.removeEventListener('storage', this.storageListener);
        this.storageListener = null;
    }

    stop() {
        this.stopTimers();
        this.removeStorageListener();
    }

    start() {
        if (this.options.warnAfter) {
            this.warnTimer = setTimeout(this.warn.bind(this), this.options.warnAfter);
        }
        this.logoutTimer = setTimeout(this.logout.bind(this), this.options.logoutAfter);
    }

    expirationTimeUpdated(e) {
        if (app.session.user) {
            if (e.key === "tiborsulyan.autologout") {
                if (e.newValue) {
                    // Update detected from another tab, restarting timer
                    this.lastUpdate = Date.now();
                    this.restart();
                } else {
                    // Logout happened on another tab
                    this.logout();
                }
            }
        }
    }

    restart() {
        this.stopTimers();
        this.start();
        this.fireRestartedEvent();
    }

    fireRestartedEvent() {
        window.dispatchEvent(new Event('autologoutRestarted'));
    }

    updateExpirationTime() {
        if (Date.now() - this.lastUpdate > 2000) {
            this.lastUpdate = Date.now();
            localStorage.setItem("tiborsulyan.autologout", this.lastUpdate);
            this.restart();
        }
    }

}