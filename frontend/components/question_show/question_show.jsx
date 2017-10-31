import React from 'react';
import { Link } from 'react-router-dom';
import AnswerEditorContainer from '../answer_editor/answer_editor_container';
import AnswerIndexItemContainer from './answer_index_item_container';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answer_author_id: "",
      question_id: "",
      showAnswerEditor: false
    };
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
  }

  componentDidMount(){
    const qid = this.props.match.params.questionId;
    this.props.fetchQuestion(qid);

  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.match.params.questionId !== this.props.match.params.questionId){
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  toggleAnswerComponent(){
    this.setState({showAnswerEditor: !this.state.showAnswerEditor});
  }

  render(){
    const question = this.props.question;
    if (!question) {
      return <div>Loading...</div>;
      }
      else{
        //TODO: fix
        let answers = [];
        if(question.answers){
          answers = Object.values(question.answers).map((answer) =>{
            return (
              <AnswerIndexItemContainer answer={answer} currentUser={this.props.currentUser} />
            );
          });
        }
        return (
          <div className="qs-wrapper">
            <div className="qs-content">
              <section className="qs-content-main">
                <div className="qs-q-text">{question.body}</div>
                <h1>Asked by {question.authorName} </h1>
                <button onClick={ this.toggleAnswerComponent }>Answer</button>
                <div className={ this.state.showAnswerEditor ? "" : "hidden-signup"}>
                  <AnswerEditorContainer question_id={question.id} cancel={ () => this.toggleAnswerComponent() }/>
                </div>
                <div>
                  {answers.length} {answers.length <= 1 ? `Answer` : `Answers`} {}
                </div>
                <ul>
                  { answers }
                </ul>
              </section>
              <section className="qs-content-sidebar">
                Sidebar
              </section>
            </div>
          </div>
        );
      }
    }
  }

  export default QuestionShow;
