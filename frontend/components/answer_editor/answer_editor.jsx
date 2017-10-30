import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill'; // ES6

// class AnswerAnswerEditor extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleAnswer = this.handleAnswer.bind(this);
//   }
//
//   handleAnswer(e){
//     e.preventDefault();
//     this.props.createAnswer(this.state);
//   }
//
//   update(field){
//     return (e) => this.setState({[field]: e.target.value});
//   }
//
//
//
//
//   render(){
//     return (
//       <div>
//         <ReactQuill
//           modules={{
//             toolbar: [
//               [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//               [{size: []}],
//               ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//               [{'list': 'ordered'}, {'list': 'bullet'},
//               {'indent': '-1'}, {'indent': '+1'}],
//               ['link', 'image', 'video'],
//               ['clean']
//             ],
//             clipboard: {
//               // toggle to add extra line breaks when pasting HTML:
//               matchVisual: false,
//             }}}
//             formats={[
//               'header', 'font', 'size',
//               'bold', 'italic', 'underline', 'strike', 'blockquote',
//               'list', 'bullet', 'indent',
//               'link', 'image', 'video'
//             ]}
//             bounds={'.app'}
//             placeholder={this.props.placeholder}
//             />
//           <form className="modal-form" onSubmit={this.handleAnswer} >
//             <div className="modal-header">
//               <textarea placeholder="Write your answer" className="modal-textarea" onChange={this.update("body")}></textarea>
//             </div>
//             <div className="modal-footer">
//               <button className="session-submit-button modal-button">Submit</button>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   }

  // export default AnswerAnswerEditor;



  class AnswerEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
  	this.setState({ text: value });
  }

  render () {
    
    return (
        <ReactQuill style={{minHeight: 300, minWidth: 600}}  />
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
AnswerEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AnswerEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default AnswerEditor;
