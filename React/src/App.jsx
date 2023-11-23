import { Routes, Route, Link } from 'react-router-dom';

import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ShowGithubUser from './components/ShowGithubUser/ShowGithubUser';
import PageNotFound from './components/PageNotFound';

import "./App.css";

const App = () => {

	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users/:username" element={<ShowGithubUser />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<div>
				<Link to="/">Home</Link><br/>
				<Link to="/counter">Counter</Link><br/>
				<Link to="/users/hsrvms">ShowGithubUser</Link>
			</div>
		</>
	)

};

export default App;
