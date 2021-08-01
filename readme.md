# Mini web app FULL STACK
Full stack miniweb for learning and testing my web-dev skills

### Enviroment
All enviroment variables stand in a .env file you must create to get the project running
+ **WEBSITE_PORT**=port_to_call_from_browser_and_get_the_webpages

### Scripts
+  "build": *compiles all .ts files into a **this_project/build** folder*
+  "start": *runs the website server listening on localhost:WEBSITE_PORT*
+  "dev-front": *runs nodemon with the entry point of the website (**this_project/src/website/index.ts**)*
+  "dev-back": *runs nodemon with the entry point of the api that controles services requiring access to db for example (**this_project/src/api/api-app.ts**)*
