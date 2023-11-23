
import { Routes, Route} from 'react-router-dom';

import "./App.css";
import Welcome from './components/Welcome';

const App = () => {

	return (
			<Routes>
				<Route path="/" element={<Welcome />} />
			</Routes>
	)

};

export default App;
