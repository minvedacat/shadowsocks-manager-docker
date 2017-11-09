const gcmSenderId = appRequire('services/config').get('plugins.webgui.gcmSenderId').toString();

const manifest = {
  short_name: 'ssmgr',
  name: '带你看世界',
  start_url: '/',
  display: 'standalone',
  background_color: 'rgb(69, 70, 72)',
  theme_color: 'rgb(69, 70, 72)',
  gcm_sender_id: gcmSenderId
};

exports.manifest = manifest;
