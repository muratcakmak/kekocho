import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
    return (<div className="posts">
      <article className="post">
          <div className="post-body">
            <h2><a href="#">{this.props.question.body}</a></h2>
            <p>
              Ambo, quia consociatae gaudent Parlamenti maioritate, possint gubernium constituere. Hae duae, ut mihi videtur, differunt a nationali socialismo sive Nazismo qui olim in Germania viguit; hoc erat regimen totalitarium ubi civium libertas conculcabatur et etniae vel Judaei odio philetico vexabantur.
            </p>

            <footer className="post-footer">
              <ul className="post-footer-info">
                <li><a href="#">Answerer Name</a></li>
              </ul>

            </footer>
          </div>
        </article>
      </div>);
    }
  }


  export default QuestionIndexItem;
  //
  // <a href="#" className="post-thumb thumb" title="Sennacy">
  //   <img src="./images/cat.jpg" alt="">
  //   </a>
