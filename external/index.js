const fs = require("fs");

const polka = require("polka");
const request = require("request");

const { PROXY_HOST, PORT, PERSIST_STORAGE } = process.env;

polka()
  .get("/", (req, res) => {
    request.get(PROXY_HOST).pipe(res);
  })
  .get("/logs", (req, res) => {
    const logs = fs.readFileSync(
      PERSIST_STORAGE + "/internal.log",
      "utf-8"
    );

    res.end(logs);
  })
  .listen(
    {
      port: PORT,
      host: "0.0.0.0"
    },
    err => {
      if (err) throw err;
      console.log(`> Server running on port :${PORT}`);
    }
  );
