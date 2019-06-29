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
const playlistRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
playlistRouter.get('/', (req, res) => {
  playlistApi.getAllPlaylists()
  .then((playlists) => {
    console.log(playlists)
    res.render('playlists/playlists', {playlists})
  })
  
})

playlistRouter.post('/', (req, res) => {
  playlistApi.addPlaylist(req.body)
  .then (() => {
    res.redirect('/playlists')
  })
})

playlistRouter.get('/new', (req, res) => {
  res.render('playlists/createPlaylistForm')
})

playlistRouter.get('/:playlistId', (req, res) => {
  playlistApi.getOnePlaylist(req.params.playlistId)
  .then((playlist) => {
    res.render('playlists/playlist', {playlist})
  })
})

playlistRouter.put('/:playlistId', (req, res) => {
  playlistApi.editPlaylist(req.params.playlistId, req.body)
  .then(() => {
    res.redirect('playlists/playlists')
  })
})

playlistRouter.delete('/:playlistId', (req, res) => {
  playlistApi.deletePlaylist(req.params.playlistId)
  .then (() => {
    res.redirect('/playlists')
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playlistRouter
}
