/* eslint-disable quotes */
/* eslint-disable strict */
/* eslint-disable arrow-parens */
const moment = require("moment");
exports.relativeTime = (time) => moment(new Date(time * 1000)).fromNow();
