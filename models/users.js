
/* Step 1
 * import mongoose connection
 */
const mongoose = require('./connection.js')

/* Step 2
 * create model schema 
 */
const UserSchema = new mongoose.Schema({
 name: {type: String, required: true},
 username: {type: String, required: true},
 password: {type: String, required: true},
})

/* Step 3
 * create collection API
 */
const UsersCollection = mongoose.model('User', UserSchema)

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
 * export all functions
 */
module.exports = {
  getAllUsers,
  getOneUser,
  addNewUser,
  deleteUser
}
