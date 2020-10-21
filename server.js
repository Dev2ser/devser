const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
