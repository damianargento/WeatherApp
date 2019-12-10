import React from 'react';
import './App.css';
const API = "http://api.weatherstack.com/current?access_key=e85eaaed9d20b339b2db9017665a8ff9&query="

class TimeApp extends React.Component {
<<<<<<< HEAD
=======

>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
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
<<<<<<< HEAD
	}

=======
}
>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
search = event => {
	this.componentDidMount();
}
handleChange = event => {
	this.setState({ userQuery: event.target.value });
  };
<<<<<<< HEAD
keyPressed = event => {
	if (event.which === 13) {
		this.setState({userQuery: event.target.value});
		this.search()
	}
}
=======

>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
	render() {
		const { current } = this.state;
		const { ubicacion } = this.state;
		const { isLoading } = this.state;
		return (
				isLoading ? <div>Cargando...</div> : 
		<div style={{marginTop:'35px'}} className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12" align="right">
<<<<<<< HEAD
              <div><img style={{borderRadius:'15px'}} src={current.weather_icons} alt={current.weather_descriptions}/></div>
=======
              <div><img style={{borderRadius:'15px'}} src={current.weather_icons} alt=""/></div>
>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
			  <div style={{fontSize:'30px',color:'#048587', fontWeight:700, margin:'5px 0 -10px 0'}}>{current.temperature}°C</div>
              <div style={{fontSize:'13px',color:'#470000', fontWeight:200}}>{ubicacion.name}</div>
             </div>
            <div className="col-md-6 col-xs-12 form-fields" align="left">
<<<<<<< HEAD
              <input value={this.state.userQuery} className="form-control search" onKeyPress={this.keyPressed} onChange={this.handleChange}></input>
=======
              <input value={this.state.userQuery} className="form-control search" onChange={this.handleChange}></input>
>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
              <button className="btn btn-success" onClick={this.search}>Search</button>
            </div>
          </div>
				</div>
			)
		}
<<<<<<< HEAD
		
=======
>>>>>>> 6f8a9733609b0188ae779afc39e9fcd4c5b4eb85
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
