const fs = require("fs");
const polka = require("polka");

/**
 *
 * @param {string} log
 */
const log = function(log) {
  fs.writeFileSync(
    process.env.PERSIST_STORAGE + "/internal.log",
    log,
    {
      encoding: "utf8",
      flag: "a"
    },
    error => {
      if (error) console.error("Error:", error);
    }
  );
};

polka()
  .get("/", (req, res) => {
    log("request at " + new Date().toUTCString() + "\n");
    res.end(`Hello from internal service`);
  })
  .listen(
    {
      port: 3001,
      host: "0.0.0.0"
    },
    err => {
      if (err) throw err;
      console.log(`> Server running on port :3001`);
    }
  );
