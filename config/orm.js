const connection = require("./connection");

const orm = {
  selectAll: function (colToSearch, valOfCol) {
    connection.query(
      "SELECT * FROM bugers WHERE ?? = ?",
      [colToSearch, valOfCol],
      (err, res) => {
        if (err) throw err;
        return res;
      }
    );
  },

  insertOne: function (name, tOrF) {
    connection.query(
      "INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)",
      [name, tOrF],
      (err, res) => {
        if (err) throw err;
        return res;
      }
    );
  },

  updateOne: function (burgerName, devoured) {
    connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [burgerName, devoured],
      (err, res) => {
        if (err) throw err;
        return res;
      }
    );
  },
};

module.exports = { orm };
