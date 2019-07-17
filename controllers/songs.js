/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 */
const SongApi = require('../models/songs.js')
const playlistApi = require('../models/playlists.js')
const userApi = require('../models/users.js')

/* Step 3 
 * 
 * Create a new router.
 
 */
const songRouter = express.Router({mergeParams: true})

/* Step 4
 * Put all request handlers here
 */ 
songRouter.get('/', (req, res) => {
  SongApi.getAllSongs()
  .then((songs) => {
    res.render('./songs/songs', {songs})
    console.log(songs)
  })
})

songRouter.get('/new', (req, res) => {
  playlistApi.getOnePlaylist(req.params.playlistId)
  .then((playlist) => {
    res.render('songs/createSongForm', {playlist})
  })
})

songRouter.get('/:songId', (req, res) => {
  SongApi.getOneSong(req.params.songId)
  .then((song) => {
    res.render('./songs/song', {song})
  })
})


songRouter.post('/', (req, res) => {
  console.log(req.body)
  req.body.playlistId = req.params.playlistId
  req.body.userId = req.params.userId
  SongApi.addSong(req.body)
  .then(() => {
    res.redirect(`/users/${req.params.userId}/playlists/${req.params.playlistId}/songs`)
  })
})

songRouter.delete('/:songId', (req, res) => {
  SongApi.deleteSong(req.params.songId)
  .then(() => {
    res.redirect(`/users/${req.params.userId}/playlists/${req.params.playlistId}/songs`)
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  songRouter
}
