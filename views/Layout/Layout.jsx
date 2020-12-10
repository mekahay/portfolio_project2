const React = require('react');

class Layout extends React.Component{
    render(){
        return(
            <html>
                <link rel="stylesheet" href="/css/styles.css"/>
                <head>
                    <h1>Portfolio</h1>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    <nav>
                        <a href={'/home'}>Home</a>
                        <a href={"/project1"}>Project 1</a>
                        <a href={'/about'}>About</a>
                        <a href={'/contact'}>Contact</a>
                        <a href={'/resume'}>Resume</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;