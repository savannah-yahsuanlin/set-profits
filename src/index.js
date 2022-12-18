import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Search from './Components/Search';
import Profits from './Components/Profits';


const App = () =>{
	const [profits, setProfits] = useState([])
	return (
		<div>
			<h1>Revenue</h1>
			<Search setProfits={setProfits}/>
			<Profits profits={ profits }/>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'))