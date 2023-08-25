const exp = require("express");
const app = exp();

module.exports = app.get("/", (req, resp) => {
  let d = new Date();
  resp.send(`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`);
});

app.listen(3000);
