import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import QuestionButtonContainer from './question_button_container';

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.myFunction = this.myFunction.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout().then(() => this.props.history.push('/login'));
  }

  myFunction() {
      // let x = document.getElementById("myTopnav");
      // if (x.className === "header-item") {
      //     x.className += " responsive";
      // } else {
      //     x.className = "header-item";
      // }
  }

  render(){
    const user = this.props.user;
    const initials = user.userName.split(" ").map((n)=>n[0]).join("");
    return (
      <div>
        <header className="header" >
          <nav className="header-nav" id="myTopnav">
            <div className="header-item">
              <h1 className="header-logo">
                  <div className="header-logo">
                    <Link to="/" style={{fontWeight: "900", fontSize: "25px"}}>Kekocho</Link>
                  </div>
              </h1>
            </div>

            <div className="header-item">

              <div className="header-list">
                <Link to="/" className="header-link">
                  <div className="header-list-item">
                    <span className="nav_item_icon">
                      <svg width="25px" height="25px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons" stroke="none" strokeWidth="1" fill="var(--icon_color, #555)" fillRule="evenodd">
                          <path d="M4,7.99448227 C4,5.23610588 6.24325385,3 9.00365614,3 L46,3 L46,42.1055177 C46,44.8638941 43.7567461,47.1 40.9963439,47.1 L4,47.1 L4,7.99448227 M11,12 L25,12 L25,14 L11,14 M11,20 L25,20 L25,22 L11,22 M11,28 L39,28 L39,30 L11,30 M11,36 L39,36 L39,38 L11,38 M29,12 L39,12 L39,22 L29,22 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                    <div className="nav-bar-title">
                      Home
                    </div>
                  </div>
                </Link>


                <Link to="/answers" className="header-link">
                  <div className="header-list-item">
                    <span className="nav_item_icon"><svg width="25px" height="25px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="answer" stroke="none" strokeWidth="1" fill="var(--icon_color, #555)" fillRule="evenodd">
                        <path d="M25,24.907293 L25,45.3 C25,45.5761424 24.7761424,45.8 24.5,45.8 L23.42,45.8 C23.1438576,45.8 22.92,45.5761424 22.92,45.3 L22.92,45.3 L22.92,24.907293 L25,24.907293 Z M23.96,22.92 L44.2873495,22.92 C44.5634919,22.92 44.7873495,23.1438576 44.7873495,23.42 L44.7873495,23.42 L44.7873495,24.407293 C44.7873495,24.6834354 44.5634919,24.907293 44.2873495,24.907293 L23.96,24.907293 L22.92,24.907293 L22.92,23.96 C22.92,23.3856239 23.3856239,22.92 23.96,22.92 Z" id="Combined-Shape" transform="translate(33.853675, 34.360000) rotate(-180.000000) translate(-33.853675, -34.360000) "></path>
                        <path d="M7.32,6.187293 L7.32,26.58 C7.32,26.8561424 7.09614237,27.08 6.82,27.08 L5.74,27.08 C5.46385763,27.08 5.24,26.8561424 5.24,26.58 L5.24,26.58 L5.24,6.187293 L7.32,6.187293 Z M6.28,4.2 L26.6073495,4.2 C26.8834919,4.2 27.1073495,4.42385763 27.1073495,4.7 L27.1073495,4.7 L27.1073495,5.687293 C27.1073495,5.96343537 26.8834919,6.187293 26.6073495,6.187293 L6.28,6.187293 L5.24,6.187293 L5.24,5.24 C5.24,4.66562386 5.70562386,4.2 6.28,4.2 Z"></path>
                        <g id="FILLED-PENCIL" transform="translate(23.869499, 26.014975) rotate(-315.000000) translate(-23.869499, -26.014975) translate(18.369499, -2.985025)">
                          <path d="M4.05262878,56.4260093 L0,47.1640748 L10.4,47.1640748 L6.34737122,56.4260093 C6.07010171,57.059685 5.33163476,57.3486092 4.69795913,57.0713397 C4.40933948,56.945052 4.17891647,56.714629 4.05262878,56.4260093 Z M5.00959999,-1.59773453e-15 L5.2,-1.59773453e-15 L5.2,-1.77635684e-15 C8.0718807,-2.30392962e-15 10.4,2.3281193 10.4,5.2 L10.4,47.1640748 L5.2,47.1640748 L-5.42101086e-20,47.1640748 L-5.42101086e-20,5.00959999 L-8.8817842e-16,5.00959999 C-1.2269916e-15,2.24287431 2.24287431,-3.04449391e-15 5.00959999,-3.55271368e-15 L5.00959999,-1.59773453e-15 M1.04 49.92 9.36 49.92 9.36 50.923491 6.50507812 50.923491 1.04 50.923491 Z"></path>
                        </g>
                      </g>
                    </svg></span>
                    <div className="nav-bar-title">
                      Answer
                    </div>
                  </div>
                </Link>

              </div>
            </div>

            <div className="header-item">
              <div className="nav-bar-item">
                <div className="header-search-container">
                  <SearchBarContainer />
                </div>
              </div>
            </div>

            <div className="header-item">
              <div className="header-avatar">
                <div class="comment-editor-header">
                  {initials}
                  <div class="header-avatar-dropdown">
                    <a onClick={this.logout} className="header-logout">Logout</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-item">
              <div className="nav-bar-item">
                <QuestionButtonContainer />
              </div>
            </div>

          </nav>



        </header>
        <div className="header-hide">
        </div>
      </div>
    );
  }
}

export default NavBar;










// <div className="header-item">
//
//   <div className="nav-bar-item">
//     <GreetingContainer />
//   </div>
// </div>
