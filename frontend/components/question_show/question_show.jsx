import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component{
  constructor(props){
    
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      body: "",
      answer_author_id: "",
      question_id: ""
    };
  }

  componentDidMount(){
    const qid = this.props.match.params.questionId;
    this.setState({question_id: qid, answer_author_id: this.props.user.id});
    this.props.fetchQuestion(qid);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.questionId !== this.props.match.params.questionId){
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  handleAnswer(e){
    e.preventDefault();
    this.props.createAnswer(this.state);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  render(){
    const question = this.props.question;
    if (!question) {
      return <div>Loading...</div>;
    }
    return (
      <div>
       <h3>{question.body}</h3>
       <h1>Asked by </h1>
       <Link to="/">Back to Index</Link>
         <form className="modal-form" onSubmit={this.handleAnswer} >
           <div className="modal-header">
             <textarea placeholder="Write your answer" className="modal-textarea" onChange={this.update("body")}></textarea>
           </div>
           <div className="modal-footer">
             <button className="session-submit-button modal-button">Post</button>
           </div>
         </form>
     </div>
    );
  }
}

export default QuestionShow;
