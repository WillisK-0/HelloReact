import React from "react";
import { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <a href="#" className="article-link">
          {this.props.title}
        </a>
        <p className="article-body">{this.props.body}</p>
        <div className="article-comments">
          <p className="article-comments-items">
            {this.props.comments} comments {this.props.likes} likes{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default Article;
