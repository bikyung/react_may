import Header from './component/common/Header';
import Footer from './component/common/Footer';

import Visual from './component/main/Visual';
import Content from './component/main/Content';

import Department from './component/sub/Department';
import Community from './component/sub/Community';
import Gallery from './component/sub/Gallery';
import Youtube from './component/sub/Youtube';
import Join from './component/sub/Join';
import Location from './component/sub/Location';

import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/location' component={Location} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/join' component={Join} />
			<Footer />
		</>
	);
}

export default App;
