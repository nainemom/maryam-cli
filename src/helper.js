import logUpdate from 'log-update';
import colors from 'colors';
export default {
  _spinner: null,
  spinner(set = false) {
    if (set) {
      let i = 0;
      const frames = ['|', '/', '-', '\\'];
      this._spinner = setInterval(() => {
        logUpdate(frames[i = ++i % frames.length]);
      }, 170);
    }
    else {
      clearInterval(this._spinner);
      this._spinner = null;
      logUpdate.clear();
      logUpdate.done();
    }
  },
  output(txt = '') {
    console.log(txt);
  },
  ok(txt = '') {
    console.log('OK:'.bold.green, txt);
  },
  error(txt = '') {
    console.log('ERROR:'.bold.red, txt);
  }
}