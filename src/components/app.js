import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				SVG: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1020" dangerouslySetInnerHTML={{__html: '<g fill="none" fill-rule="evenodd"><path fill="#55ACEE" d="M517.3 874.7c256.3 0 506.7-89.2 506.7-437.4S773.6 0 517.3 0C261 0 0 89 0 437.3 0 601 57.6 707.3 145.3 774c27 154.2-42 228-54.5 244.5C250.3 1034 345 884 375 864.3c46.6 7.3 94.5 10.4 142.3 10.4z"/><g fill="#0D436C" transform="translate(288 405.333)"><circle cx="42.7" cy="42.7" r="42.7"/><circle cx="229.3" cy="42.7" r="42.7"/><circle cx="416" cy="42.7" r="42.7"/></g></g>'}} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
