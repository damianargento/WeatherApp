import React from 'react';
import logo from './logo.svg';
import './App.css';

class TimeApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current: {},
			ubicacion: {},
			isLoading:false,
			userQuery: "Buenos Aires"
			}
		}

    componentDidMount() {
		this.setState({isLoading:true})
		fetch(API + this.state.userQuery)
		.then(response => response.json())
		.then(data => this.setState({ current: data.current, ubicacion: data.location, isLoading: false, }))
}
search = event => {
	this.componentDidMount();
}
handleChange = event => {
	this.setState({ userQuery: event.target.value });
  };

	render() {
		const { current } = this.state;
		const { ubicacion } = this.state;
		const { isLoading } = this.state;
		return (
				isLoading ? <div>Cargando...</div> : 
				<div>
					
				<div><img src={current.weather_icons} alt=""/></div>
				<div>{ubicacion.name}</div>
				<div>{current.temperature} °C</div>
				<input value={this.state.userQuery} onChange={this.handleChange}></input>
				<button onClick={this.search}>Search</button>
				</div>
			)
		}
	}
const App = () => (
<div className="generalDiv">
	<header className="headerStyle">
		<nav className="navStyle">
		    <div className="menuStyle hide-mob">
			</div>
		</nav>
	</header>
	<section className="App">
		<TimeApp/>
	</section>
</div>
);
export default App;
