/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const SongApi = require('../models/songs.js')
const playlistApi = require('../models/playlists.js')
const userApi = require('../models/users.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const songRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
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
