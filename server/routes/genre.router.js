const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  // The STRING_AGG() is an aggregate function
  // that concatenates rows of strings into a single string,
  // separated by a specified separator. It does not add the separator at the end of the result string
  let queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description,
                    string_agg("genres"name, ',') AS genre FROM "movies"
                    JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                    JOIN "genres" ON "genres".id = "movies_genres".genre_id
                    WHERE "movies".id = $1
                    GROUP BY 1;`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      console.log("result rows:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
