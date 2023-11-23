
import { Routes, Route} from 'react-router-dom';

import "./App.css";
import Welcome from './components/Welcome';
import Counter from './components/Counter';

const App = () => {

	return (
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
	)

};

export default App;
