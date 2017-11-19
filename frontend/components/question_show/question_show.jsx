import React from 'react';
import { Link } from 'react-router-dom';
import AnswerEditorContainer from '../answer_editor/answer_editor_container';
import AnswerIndexItemContainer from './answer_index_item_container';
import { compare } from '../../util/util';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answer_author_id: "",
      question_id: "",
      showAnswerEditor: false
    };
    this.openEditModal = this.openEditModal.bind(this);
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
  }

  componentDidMount(){

    window.scrollTo(0, 0);
    // $('html, body').scrollTop(0);
    const qid = this.props.match.params.questionId;
    this.props.fetchQuestion(qid).then((question) => this.setState({question_id: question.id}));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.questionId !== this.props.match.params.questionId){
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  toggleAnswerComponent(){
    this.setState({showAnswerEditor: !this.state.showAnswerEditor});
  }

  openEditModal(){
    this.props.showModal("edit", this.props.question.id);
  }

  render(){
    const question = this.props.question;
    if (!question) {
      return <div>Loading...</div>;
      }
      else{
        //TODO: fix
        let answers = [];

        if(this.props.answers){
          answers = this.props.answers.sort(compare).map((answer) =>{
            return (
              <AnswerIndexItemContainer key={answer.id} answer={answer} currentUser={this.props.currentUser} />
            );
          });
        }

        console.log( question.questionAuthorId + "  " + this.props.currentUser.id )
        return (
          <div className="qs-wrapper">
            <div className="qs-content">
              <section className="qs-content-main">
                <div className="qs-q-text">{question.body}</div>
                <div className="qs-ask">Asked by {question.authorName} </div>
                <div className="qs-button-wrapper">
                  <button onClick={ this.toggleAnswerComponent } className="qs-answer-button"> Answer </button>
                  {question.questionAuthorId === this.props.currentUser.id ?
                    <div className="header-question-button-container">
                      <a onClick={this.openEditModal} className="qs-edit">Edit Question</a>
                    </div>  :
                    null
                  }
                </div>
                <div className={ this.state.showAnswerEditor ? "" : "hidden-signup"}>
                  <AnswerEditorContainer question_id={question.id} cancel={ () => this.toggleAnswerComponent() }/>
                </div>

                <div className="qs-answer-number">
                  {answers.length} {answers.length <= 1 ? `Answer` : `Answers`} {}
                </div>
                <ul>
                  { answers }
                </ul>
              </section>
              <section className="qs-content-sidebar">
              </section>
            </div>
          </div>
        );


      }
    }
  }

  export default QuestionShow;
