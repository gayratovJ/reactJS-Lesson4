import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../header/header.module.css";
export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div className="row">
        <div className="col-4">
          <h3>
            {id}. {title}
          </h3>
          <p>{body}</p>
          <Link to={`/posts/${id}`}>About more</Link>
        </div>
      </div>
    );
  }
}

export default PostCard;
