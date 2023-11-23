
import { Routes, Route} from 'react-router-dom';

import "./App.css";
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ShowGithubUser from './components/ShowGithubUser/ShowGithubUser';

const App = () => {

	return (
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/users/:username" element={<ShowGithubUser />} />
			</Routes>
	)

};

export default App;
