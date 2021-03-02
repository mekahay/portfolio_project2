const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Contact extends React.Component {
    render(){
        return(
            <Layout>
                <body>
                <hr/>
                <hr/>
                <a href="mailto:mekenzie.hayford@gmail.com">Email Me Mekenzie.hayford@gmail.com</a>
                <p>cell: (253) 377-2501</p>
                <a href="https://github.com/mekahay">GitHub</a><br/>
                <a href="https://www.linkedin.com/in/mekenziehayford/">LinkedIn</a>
                </body>
            </Layout>
        )
    }
}

module.exports=Contact