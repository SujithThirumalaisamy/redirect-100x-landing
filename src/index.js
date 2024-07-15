const express = require("express")
const app = express();

const targetUrl = "https://harkirat.classx.co.in"

app.get("*", (req, res) => {
  res.redirect(targetUrl)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Redirect server running on port", port)
})
