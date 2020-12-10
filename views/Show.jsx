const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Show extends React.Component {
    render() {
        const comment = this.props.comment
        return(
            <Layout>
            <h1>Comment Show Page</h1>
            <p>Name: {comment.name}</p>
            <p>Comement: {comment.comment}</p>
            </Layout>
        )
    }
}
module.exports = Show;