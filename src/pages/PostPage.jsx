import React, { Component } from "react";
import request from "../server";
import { toast } from "react-toastify";

export class PostPage extends Component {
  state = {
    post: {},
  };
  async getPost() {
    try {
      let postId = window.location.pathname.split("/").at(-1);
      let { data } = await request(`posts/${postId}`);
      this.setState({ post: data });
    } catch (err) {
      toast.error(err.response.statusText);
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const { post } = this.state;
    return (
      <section>
        <div className="back">

        <h1>
          {post.id}. {post.title}
        </h1>
        </div>
        <p>{post.body}</p>
      </section>
    );
  }
}

export default PostPage;
