import React, { Component } from "react";
import request from "../server";
import { toast } from "react-toastify";
import ServerLoading from "../components/loading/ServerLoading";
import PostCard from "../components/cards/PostCard";
import "../components/header/header.module.css";
export class HomePage extends Component {
  state = {
    posts: [],
    loading: false,
  };
  async getPosts() {
    try {
      this.setState({ loading: true });
      let { data } = await request("posts", {
        params: { _page: 1, _limit: 10 },
      });
      this.setState({ posts: data });
    } catch (err) {
      toast.error(err.response.statusText);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, loading } = this.state;
    return (
      <section>
        <h1>Our Latest Posts</h1>
        <div className="post-row">
          {loading ? (
            <ServerLoading />
          ) : (
            posts.map((post) => <PostCard {...post} />)
          )}
        </div>
      </section>
    );
  }
}

export default HomePage;
