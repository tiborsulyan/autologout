import Modal from 'flarum/components/Modal';
import Button from 'flarum/common/components/Button';

export default class ExpirationWarningModal extends Modal {

    remainingSeconds;
    remainingTimeString;
    updateInterval;

    oninit(vnode) {
        super.oninit(vnode);
        this.remainingSeconds = this.attrs.remainingTimeMillis / 1000;
        this.recalculateRemainingTime();
        this.updateInterval = setInterval(this.updateRemainingTime.bind(this), 1000);
    }

    recalculateRemainingTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds - minutes * 60;
        this.remainingTimeString = minutes + ":" + seconds.toString().padStart(2, '0');
    }

    updateRemainingTime() {
        this.remainingSeconds--;
        if (this.remainingSeconds < 0) {
            this.removeTimeUpdater();
        } else {
            this.recalculateRemainingTime();
            m.redraw();
        }
    }

    removeTimeUpdater() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    className() {
        return 'ExpirationWarningModal Modal--small';
    }

    title() {
        return "Figyelmeztetés";
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form Form--centered">
                    <div className="Modal-header">
                        <h3>Mindjárt lejár a munkamenet, mi legyen?</h3>
                        <p>Hátralévő idő: {this.remainingTimeString}</p>
                    </div>
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading,
                            onclick: this.stay.bind(this)
                        }, "Bent maradok")},
                        {Button.component({
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading,
                            onclick: this.leave.bind(this)
                        }, "Kilépek")}
                    </div>
                </div>
            </div>
        );
    }

    onremove() {
        console.log("Removing modal update interval");
        this.removeTimeUpdater();
    }

    onsubmit(e) {
        e.preventDefault();
    }

    stay() {
        app.request({
            method: 'POST',
            url: `${app.forum.attribute('baseUrl')}/api/keepalive`
        });
        this.hide();
    }

    leave() {
        this.removeTimeUpdater();
        app.session.logout();
    }

};