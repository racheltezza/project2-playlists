# mehn-template-project

# Setup A New Project From This Template

If you are starting a new project do the following:

1. copy/download this directory to where you new project is located and rename
   it to the name of your project.
1. change your directory (`cd`) into the copied project template
1. `npm install`
1. `node ./server.js`
1. In a new terminal run `curl localhost:3000/helloworld`. You should see
   `hello world!` as the output. From there your server template works!
1. see the `controllers`, `models`, and `views` directories' `readme.md` files

# Setup A New Project Without This Template

If you want to start a project without using this template directory do the
following:


1. `mkdir <project-name>`
1. `cd <project-name>`
1. `echo "# <project-name>" > readme.md`
1. `git init`
1. `git add readme.md `
1. `git commit -m "init repo with readme.md"`
1. `npm init`
1. `npm install express hbs method-override`
1. `mkdir models views controllers`
1. `touch ./server.js`
