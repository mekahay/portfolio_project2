const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Home extends React.Component {
    render() {
        const comment = this.props.comment
        return(
            <Layout>
            <div className="container">
            <main class="main-content">
				<section class="section1">
					<h1>Software Development</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse nobis eligendi mollitia fugiat ad! Nulla modi tempora expedita nam? Voluptates exercitationem commodi deserunt? Esse unde asperiores voluptates non eos!</p>
				</section>
				<section class="section2">
					<h1>Design</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vel, delectus modi corrupti temporibus voluptatibus possimus. Quibusdam deserunt sunt officia earum eum recusandae hic! Beatae aliquam explicabo ab in laudantium.</p>
				</section>
			</main>
			<footer>
				<p>made by Mekenzie Hayford</p>
			</footer>
            </div>
            </Layout>
        )
    }
}
module.exports = Home;