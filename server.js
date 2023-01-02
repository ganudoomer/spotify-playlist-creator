const express = require("express");
const querystring = require("node:querystring");

const app = express();

app.get("/ping", (req, res) => {
  console.log("Ping");

  var scope = "user-read-private user-read-email";
  var redirect_uri = "http://localhost:3000/callback";
  var state = "qwenvkfrjdkekdkek";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: "",
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.listen(3000, () => {
  console.log("Server open on port 3000");
});
