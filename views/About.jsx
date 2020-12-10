const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class About extends React.Component {
    render(){
        return(
            <Layout>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit est nam laborum in rem omnis hic voluptatum aperiam, repudiandae suscipit et dignissimos vitae neque corrupti labore dicta. Cupiditate, nam.</p>
            </Layout>
        )
    }
}

module.exports=About