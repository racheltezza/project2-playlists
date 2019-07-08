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
const PlaylistSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 genre: String,
 dateCreated: Date,
 tempo: String,
 userId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlaylistCollection = mongoose.model('Playlist', PlaylistSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllPlaylists() {
  return PlaylistCollection.find()
}

function getOnePlaylist(playlistId) {
  return PlaylistCollection.findById(playlistId)
}

function addPlaylist (playlistObject) {
  return PlaylistCollection.create(playlistObject)
}

function editPlaylist(playlistId, playlistObject) {
  return PlaylistCollection.findByIdAndUpdate(playlistId, playlistObject)
}

function deletePlaylist(playlistId) {
  return PlaylistCollection.findByIdAndDelete(playlistId)
}

function getPlaylistsByUserId(userId) {
  return PlaylistCollection.find({userId: userId})
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  addPlaylist,
  editPlaylist,
  deletePlaylist,
  getPlaylistsByUserId
}
