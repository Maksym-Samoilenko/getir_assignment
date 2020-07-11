'use strict'
const app = require("./server");
app.listen(process.env.PORT || 3000, () => {
  console.log("application on port 3000 deployed");
}); 