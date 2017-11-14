# README
---
## kekocho

### IT. IS. LIVE.
 [live version](https://kekocho.herokuapp.com/)

### TLDR;

Kekocho, is a fully responsive Single-Page Application(SPA) Quora clone, is a platform "to gain and share knowledge" that allows users to ask questions and get answers from people who have experience and knowledge in the domain.


---
### Auth

Authentication part of the app has two separate parts.

#### Backend Authentication
  It is controlled by the Ruby on Rails framework which provides powerful libraries and secure environment. Encryption library BCrypt is repsonsible for the creation of session tokens whenever a user attempts to login. This session token is stored in the browser as well as the backend.

#### Frontend Authentication
  ```react-router-dom``` is a wrapper that controls the React routes. Using rails' application.html.erb file Kekocho allows a user's session to persist. 

####  Technologies:
    - Ruby on Rails
    - React
    - Redux

  ![Alt text](/readme_images/session.gif?raw=true "Login")

---

### Hosting
  Kekocho is hosted on heroku. According to heroku.com, "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud".

  Technology: Heroku

---

### Model Layer

  In Quora, a user has many questions. Questions have many answers and topics. Answers have many comments and belong to a particular question. A comment belongs to an answer and a topic has many questions.

  Topic and question relationship is established by a join table called topicQuestions. question_ids and corresponding topic_ids are stored on the table.

  When a user wants to create a topic while editing a question, the request hits the question_topic_controller. The controller checks whether the topic already exists, and grabs the question_id and creates a question_topic record on the table. With the aid of rails's ```inverse_of``` association, the backend is able to operate fluidly and consistently.

#### Technologies:
    - Postgresql
    - Ruby on Rails

---

### Question Search

![Alt text](/readme_images/search.gif?raw=true "Search")

  ```pg_search``` handles the search part of the app. It uses improved algorithms to make search faster.

---

### Question Modal

![Alt text](/readme_images/question_modal.jpg?raw=true "Question")

---

### Future

- User should be able to add new topics

- Smoother UI

- Instant Search Results
