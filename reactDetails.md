# REACT

- Intall nodejs 

  - ```
    sudo apt install curl
    curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
    sudo apt install nodejs
    node -v
    npm -v
    ```

  - It is going to create my web server , so that we can use our react component locally and we can deploy it on the web

- Install npm

  - is a package manager, which all us to install 3rd party modules like react into our application

- Make a directory 

  - mkdir HelloReact
  - cd HelloReact

- npm init

  - It will make a packagae.json file in that directory

- To install 3rd Party modules like react, jquery etc

  - npm intsall express@4 --save	
    - [save flag will update the package.json]
    - package.json file is used to store list of all the dependencies
    - node_modules: contains all the third party modules 
    - with just simple command in json we can install all the modules with just 
      - npm install
      - It will go inside package.json and see all the dependency and install them

- Steps:

  - make the server.js file
  - make the public folder in root and index,html inside the public folder
  - index.html
    - it's the default file for our application
  - Basic step start the server view it in the browser
    - write the index.html
    - node server.js or nodemon server.js
    - sudo npm install nodemon -g 

  ------

####  Hello React!

- Render my first React app
- Add the script tag in index.html
  - babel : 
    - help us to use ES6 JavaScript features in our browser 
    - convert jsx into javascript
  - react
  - react-dom
    - is only necessary for web
    - bcz react is also use on mobiles
  - we can use web tags instead of script tags .
- make app.jsx inside public 
- and provide the src of app.jsx inside the html instead of writing the code inside the html page

------

#### React Component

React Components are the building block for our webapps UI.

Our regular app is made up of several components everything rendering something to the browser.

#### JSX

- go to babel and paste the jsx code and we can see the working 
- for each tag , React.creatElement is called

#### Component Properties (props)

- props is short form for properties which is a way  to pass data into your component
  - <Greater name="Anushil"/>

