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


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const SongSchema = new mongoose.Schema({
 name: String,
 artist: String,
 genre: String,
 tempo: String,
 file: String,
 playlistId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const SongCollection = mongoose.model('Song', SongSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getSongsByPlaylist(playlistId) {
  return SongCollection.find({playlistId: playlistId})

}
function getAllSongs() {
  return SongCollection.find()
}

function getOneSong(songId) {
  return SongCollection.findById(songId)
}

function addSong(songObject) {
  return SongCollection.create(songObject)
}

function deleteSong(songId) {
  return SongCollection.findByIdAndDelete(songId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllSongs,
  getOneSong,
  addSong,
  deleteSong,
  getSongsByPlaylist
}
