import React from 'react';
import './App.css';
const API = "http://api.weatherstack.com/current?access_key=e85eaaed9d20b339b2db9017665a8ff9&query="

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
				<div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div><img src={current.weather_icons} alt=""/></div>
              <div>{ubicacion.name}</div>
              <div>{current.temperature} °C</div>
            </div>
            <div className="col-md-6 col-xs-12 form-fields" align="left">
              <input value={this.state.userQuery} className="form-control search" onChange={this.handleChange}></input>
              <button className="btn btn-success" onClick={this.search}>Search</button>
            </div>
          </div>
				</div>
			)
		}
	}
const App = () => (
<div className="container">
  <div className="row"><div class="col-md-3"></div>
    <div className="col-md-6 col-xs-12">
      <section className="App">
        <TimeApp/>
      </section>
    </div>
    <div class="col-md-3"></div>
  </div>
</div>
);
export default App;
