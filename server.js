/* 
 * This is the template for a server.js file.  Follow the steps below and read
 * the comments for creating your own (or you can just copy this file).
 */

/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express')
const app = express()
const methodOverride = require('method-override')

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { templateRouter } = require('./controllers/template.js')


/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())

/* Step 3.b 
 *
 * add method-override middleware for "faking" DELETE and PUT/PATCH requests 
 */
app.use(methodOverride('_method'))

/* Step 3.c
 *
 * use the `./public` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(__dirname+"/public"))

/* Step 3.b
 *
 * set the view engine of express to use the hbs (handlebars) package 
 */
app.set('view engine', 'hbs')


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/helloworld', templateRouter)

/* Step 5
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3000 

/* Step 6
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
