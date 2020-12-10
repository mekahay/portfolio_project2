const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div><iframe src="https://mekahay.github.io/project_1/" title="project1" width="750px" height="750px"></iframe></div>
                <a href={"/project1/new"}>Create New Comment</a>
                {this.props.comment.map((comment, index) => {
                    return(
                        <div>
                        <p >Name: {comment.name}</p>
                        <p>Comment: {comment.comment}</p>
                        <div className="buttons">
                        <a href={`/project1/${comment._id}`}><button> View Comment</button></a>
                        <a href={`/project1/${comment._id}/edit`}><button> Edit</button></a>
                        <form action={`/project1/${comment._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form>
                        </div>
                        </div>
                    )
                }
                )}
            </Layout>
        )
    }
}

module.exports=Index