/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserSchema = new mongoose.Schema({
 name: {type: String, required: true},
 username: {type: String, required: true},
 password: {type: String, required: true}
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const UsersCollection = mongoose.model('User', UserSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllUsers() {
  return UsersCollection.find()
}

function getOneUser(userId) {
  return UsersCollection.findById(userId)
}

function addNewUser(userObject) {
  return UsersCollection.create(userObject)
}

function deleteUser(userId) {
  return UsersCollection.findByIdAndDelete(userId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllUsers,
  getOneUser,
  addNewUser,
  deleteUser
}
