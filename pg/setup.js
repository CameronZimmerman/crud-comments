const client = require("./client.js");

try {
  client
    .query(
      `
DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  comment VARCHAR(1024) NOT NULL
);
`
    )
    .finally(() => client.end());
} catch (err) {
  console.log(err.message);
}
