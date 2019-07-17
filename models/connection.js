/* Import the mongoose module
 *
 */
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/users";


/* Step 2
 *
 * Open up a connection to the mongo database.
 */
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


/* Export the mongoose object.
 */
module.exports = mongoose
