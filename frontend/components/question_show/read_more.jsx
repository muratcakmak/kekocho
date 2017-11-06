import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class ReadMore extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            expanded: false,
            truncated: false
        };

        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup(rawMarkup){
      return { __html: rawMarkup };
    }

    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines(event) {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;
        debugger
        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>
                    )} onTruncate={this.handleTruncate}>
                    <span dangerouslySetInnerHTML={this.rawMarkup(children)} />
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
                )}
            </div>);
    }
}

ReadMore.defaultProps = {
    lines: 3,
    more: 'Read more',
    less: 'Show less'
};

ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.node,
    lines: PropTypes.number
};

export default ReadMore;







// {ReactHtmlParser(children)}
