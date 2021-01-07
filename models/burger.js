const orm = require("../config/orm");

const burger = {
  selectAll(colToSearch, valOfCol) {
    orm.selectAll("burger");
  },
  insertOne() {},
  updateOne() {},
};

module.exports = { burger };
