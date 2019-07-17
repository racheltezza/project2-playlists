/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models 
 */
const userApi = require('../models/users.js')
const playlistApi = require('../models/playlists.js')

/* Step 3 
 * Create a new router.
 */
const userRouter = express.Router()

/* Step 4
 * 
 *Put all request handlers here
 */
userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
  .then((users) => {
    res.render ('users/users', {users})
    console.log(users)
  })
})

userRouter.post('/', (req, res) => {
  userApi.addNewUser(req.body)
  .then(() => {
    res.redirect('/users')
  })
})

userRouter.get('/new', (req, res) => {
  res.render('users/createUserForm')
})

userRouter.get('/:userId/playlists', (req, res) => {
  userApi.getOneUser(req.params.userId)
  .then((user) => {
    playlistApi.getPlaylistsByUserId(user._id)
    .then((playlists) => {
      res.render('playlists/playlists', {user, playlists})
    })
  })
})

userRouter.get('/:userId', (req, res) => {
  userApi.getOneUser(req.params.userId)
  .then((user) => {
      res.render('./users/user', {user})
  })
  .catch((err) => {
      res.send(err)
    })
})

userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
  .then(() => {
      res.redirect('/users')
  })
  .catch((err) => {
      res.send(err)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
