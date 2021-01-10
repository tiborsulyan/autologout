import Alert from 'flarum/common/components/Alert';
import Link from 'flarum/common/components/Link';

app.initializers.add('tiborsulyan/autologout', () => {
  app.extensionData
    .for('tiborsulyan-autologout')
    .registerSetting({
      setting: 'tiborsulyan-autologout.timeoutAfter',
      type: 'number',
      label: app.translator.trans('tiborsulyan-autologout.admin.settings.timeoutAfter')
    })
    .registerSetting({
      setting: 'tiborsulyan-autologout.warnAfter',
      type: 'number',
      label: app.translator.trans('tiborsulyan-autologout.admin.settings.warnAfter')
    });
});
