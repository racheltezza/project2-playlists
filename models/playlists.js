
const mongoose = require('./connection.js')


/* Step 2
 * create model schema 
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
  create collection API

 */
const PlaylistCollection = mongoose.model('Playlist', PlaylistSchema)

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
 * export functions
 */
module.exports = {
  getAllPlaylists,
  getOnePlaylist,
  addPlaylist,
  editPlaylist,
  deletePlaylist,
  getPlaylistsByUserId
}
