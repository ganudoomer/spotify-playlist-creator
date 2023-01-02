require("dotenv").config();

const oauthToken = process.env.TOKEN;
const playlist = "7vwJvd7oTmWmaUqTXjXXjz";
const axios = require("axios");
const SpotifyWebApi = require("spotify-web-api-node");
const parser = require("./parser").parsedData;

var spotifyApi = new SpotifyWebApi({
  clientId: "",
  clientSecret: "",
  redirectUri: "Some random callback",
});

const sleep = function () {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
};

async function main() {
  const data = parser();
  const success = [];
  const error = [];
  spotifyApi.setAccessToken("Insert Token here");

  for (const str of data) {
    await sleep();
    try {
      const data = await spotifyApi.search(str, ["track"]);
      await spotifyApi.addTracksToPlaylist(playlist, [
        "spotify:track:" + data.body.tracks.items[0].id,
      ]);
      success.push(data.body.tracks.items[0].id);
      console.log(data.body.tracks.items[0].id);
    } catch (e) {
      error.push(str);
      console.log(str);
    }
  }
  console.log(success);
  console.log(error);
  // credentials are optional
}

main();
