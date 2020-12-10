const React = require('react');
const Layout = require('./Layout/Layout.jsx')



class New extends React.Component {
    render(){
        return (
            <Layout>
                <h1>New Comment Page</h1>
                <div><iframe src="https://mekahay.github.io/project_1/" title="project1" width="750px" height="300px"></iframe></div>
                <form action="/project1" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Comment: <input type="text" name="comment" /><br/>
                    <input type="submit" name="" value="Create Comment"/>
                </form>
            </Layout>

        )
    }
}
module.exports = New;