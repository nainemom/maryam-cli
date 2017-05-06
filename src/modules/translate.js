import helper from '../helper.js';
import translate from 'google-translate-api';
module.exports = function (txt = '') {
  txt = txt.trim();
  let to = {
    code: 'fa',
    name: 'Persian'
  }
  if (/^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF7\u200C\u200F ]+$/.test(txt)) {
    to = {
      code: 'en',
      name: 'English'
    }
  }

  helper.spinner(true);
  translate(txt, {
    to: to.code
  }).then(res => {
    helper.spinner(false);
    helper.ok(res.text.trim());
  }).catch(err => {
    helper.spinner(false);
    switch (err.code) {
      case 'BAD_NETWORK':
        helper.error('Bad network!');
        break;
      default:
        helper.error('Unhandled error!');
    }

  });
}