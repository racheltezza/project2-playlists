/* Step 1
 *  import mongoose connection
 */
const mongoose = require('./connection.js')

/* Step 2
 * create model schema 
 */
const SongSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 artist: {
   type: String,
   required: true
 },
 genre: String,
 tempo: String,
 file: String,
 playlistId: mongoose.Types.ObjectId,
 userId: mongoose.Types.ObjectId
})

/* Step 3
 * create collection API
 */
const SongCollection = mongoose.model('Song', SongSchema)

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
 * export all functions
 */
module.exports = {
  getAllSongs,
  getOneSong,
  addSong,
  deleteSong,
  getSongsByPlaylist
}
