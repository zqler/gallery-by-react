import {router, browserHistory} from 'react-router'
React.render(
  <Router history="browserHistory">
  <Router name="movies" path="/movies/:id" handler={Movie} />//路由跳转
  <Router name="books" path="/books/:id" handler={books} />
  <Router name="photo" path="/phote/:id" handler={photo} />
  <Router name="home" path="/home/:id" handler={home} />
  </Router>
)
