'use strict';

module.exports.plumber = {
  handleError: function(err) {
    console.log(err);
    this.emit('end');
  }
};
