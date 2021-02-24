import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            api: 'https://my-json-server.typicode.com/typicode/demo/posts',
            posts: [],
        };
    }

    getData() {
        fetch(this.state.api)
            .then(response => response.json())
            .then(posts => this.setState({posts: posts}));
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        let posts;

        if (this.state.posts.length > 0) {
            posts = (<ul>
                {this.state.posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>);
        }

        return (
            <div>
                {this.state.api}
                {posts}
            </div>
        );
    }
}

export default Posts;
