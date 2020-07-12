'use strict'
/**
 * @fileoverview Functionality for deploying server 
 * with express application 
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const app = require("./server");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("application deployed on port" + port);
}); 
