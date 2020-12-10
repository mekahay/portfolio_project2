const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Contact extends React.Component {
    render(){
        return(
            <Layout>
                <body>
                <a href="mailto:mekenzie.hayford@gmail.com">Email Us</a>
                <p>cell: (253) 377-2501</p>
                </body>
            </Layout>
        )
    }
}

module.exports=Contact