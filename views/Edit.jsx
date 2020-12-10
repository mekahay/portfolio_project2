const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Edit extends React.Component {
    render() {
        const comment = this.props.comment;
        return(
            <Layout>
                <h1>Edit Comment</h1>
                <form action={`/project1/${comment._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" value={comment.name}/> <br/>
                    Comment: <input type="text" name="comment" value={comment.comment}/><br/>
                    <input type="submit" value="Submit Changes"/>
                </form>
            </Layout> 
        )
    }
}

module.exports = Edit;