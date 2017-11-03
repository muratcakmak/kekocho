# README
---
## kekocho

### IT. IS. LIVE.
 [live version](https://kekocho.herokuapp.com/)

### TLDR;

Kekocho, a Single-Page Application(SPA) Quora clone, is a platform "to gain and share knowledge" that allows users to ask questions and get answers from people who have experience and knowledge in the domain.


---
### Auth

Authentication part of the app has two separate parts.

- Backend Authentication
  It is controlled by Ruby on Rails framework which provides powerful libraries and secure environment. Encryption library BCrypt is repsonsible to create session tokens whenever user attempts to login. This session token is also stored in browser and send back appended every REST request.

- Frontend Authentication
  react-router-dom has methods to enable the apps control the routes. Thanks to rails application.html.erb file which has is the literally the page, database is check whether user is previously logged in or not. If there is logged-in user, they are directed to the main page, otherwise they can just see the login/signup page.

  Technologies:
    - Ruby on Rails
    - React
    - Redux

  ![Alt text](/readme_images/session.gif?raw=true "Login")

---

### Hosting
  It is hosted on heroku. According to heroku.com, "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud".

  Technology: Heroku

---

### Model Layer

  In Quora, user has many questions. Questions have many answers and topics. Answers have many comments and belongs to a particular question. A comment belongs to an answer and a topic has many questions.

  Topic and question relationship is established by a joint table called topicQuestions. question_ids and corresponded topic ids are stored on the table.

  When user wants to create a topic while editing a question, the request hits to the question_topic_controller. The controller checks whether the topic is already existed, and grabs the question id and create question_topic record on the table. Thanks to rails's inverse of association, everything works even though there is no database record exists while creating a joint table record.

  Technologies:
    - Postgresql
    - Ruby on Rails

---

### Question Search

![Alt text](/readme_images/search.gif?raw=true "Search")

  pg_search handles the search part of the app. It uses improved algorithms to make search faster.

---

### Question Modal

![Alt text](/readme_images/question_modal.jpg?raw=true "Question")

---

### Future

- User should add new topics

- Smoother UI

- Mobile compatibility

- Instant Search Results
