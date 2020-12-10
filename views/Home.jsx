const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Home extends React.Component {
    render() {
        const comment = this.props.comment
        return(
            <Layout>
            <h1>Mekenzie Hayford</h1>
            </Layout>
        )
    }
}
module.exports = Home;