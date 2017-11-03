# README
---
## kekocho

### TLDR;
 [live version](https://kekocho.herokuapp.com/)

---
Kekocho, a Quora clone, is a platform "to gain and share knowledge" that allows users to ask questions and get answers from people who have experience and knowledge in the domain.


### Auth

Authentication part of the app has two separate parts.

- Backend Authentication
  It is controlled by Ruby on Rails framework which provides powerful libraries and secure environment. Encryption library BCrypt is repsonsible to create session tokens whenever user attempts to login. This session token is also stored in browser and send back appended every REST request.

- Frontend Authentication
  react-router-dom has methods to enable the apps control the routes. Thanks to rails application.html.erb file which has is the literally the page, database is check whether user is previously logged in or not. If there is logged-in user, she is directed to the main page, otherwise she can just see the login/signup page.

  ![Alt text](/readme_images/login.gif?raw=true "Login")
