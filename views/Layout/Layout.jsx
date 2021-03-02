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
                        <a href={"/work"}>WORK</a>
                        <a href={'/about'}>ABOUT</a>
                        <a href={'/contact'}>CONTACT</a>
                        <a href={'/resume'}>RESUME</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;