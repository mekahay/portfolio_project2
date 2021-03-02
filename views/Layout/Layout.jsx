const React = require('react');

class Layout extends React.Component{
    render(){
        return(
            <html>
                <link rel="stylesheet" href="/css/styles.css"/>
                <header>
                    <h1>Mekenzie Hayford</h1>
                </header>
                <body>
                    <nav>
                        <a href={'/home'}>HOME</a>
                        <a href={"/project1"}>WORK</a>
                        <a href={'/about'}>ABOUT</a>
                        <a href={'/contact'}>CONTACT</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;