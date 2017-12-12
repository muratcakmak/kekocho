import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import QuestionFeed from './question_feed';
import SideBar from './side_bar';
import { requestFeedDataWithPage } from '../../actions/feed_actions';

class Content extends React.Component {
  constructor(props) {
    super(props);
    const root = this.props.path === '/';
    this.state = {
      root,
      page: 1,
      loading: false,
    };
    this.atTheEndOfThePage = this.atTheEndOfThePage.bind(this);
    this.lastCall = 0;
  }

  componentDidMount() {
    if (this.props.path === '/answers') {
      this.props.requestFeedDataWithPage(1);
    }
  }

  componentWillReceiveProps(newProps) {
    // TODO: Request answers
    this.setState({ loading: false });
  }

  atTheEndOfThePage() {
    const that = this;
    $(window).scroll(() => {
      if (that.props.path === '/' && ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) && (Date.now() > (that.lastCall + 1000))) {
        const nextPage = that.state.page + 1;
        if (that.state.root) {
          that.setState({ loading: true });
          setTimeout(() => {
            if (that.state.loading) {
              that.setState({ loading: false });
              that.lastCall = Date.now();
            }
          }, 5000);
          that.props.requestFeedDataWithPage(nextPage);
          that.setState({
            page: nextPage,
          });
        }
        that.lastCall = Date.now();
      }
    });
  }

  render() {
    const root = this.props.path === '/';
    return (
      <div>
        { this.atTheEndOfThePage() }
        <div className="content">
          <SideBar />
          <QuestionFeed />
        </div>
        { this.state.loading ?
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <PulseLoader color="#80808070" loading={this.state.loading} />
          </div>
          :
          null }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  path: ownProps.match.path,
});

const mapDispatchToProps = dispatch => ({
  requestFeedDataWithPage: page => dispatch(requestFeedDataWithPage(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
