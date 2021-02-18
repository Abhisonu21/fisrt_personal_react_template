import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './sass/style.scss';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
	return(
		<>	

			<Switch>
				<Route exact path="/" component = {Home} />
				
				<Redirect to = "/" />
			</Switch>
		</>
		
	);
}

export default App;
