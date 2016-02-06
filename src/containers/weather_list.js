import React, {Component} from 'react';
import _ from "lodash";
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {

    const cityName = cityData.city.name;
    const temperature = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9 / 5) - 459.67);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidty = cityData.list.map(weather => weather.main.humidity);
    // Destructuring - pull lat and lon properties off of coord object
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td>{cityName} <GoogleMap lat={lat} lon={lon}/>
          </td>
        <td><Chart data={temperature} color="orange" units={'F'}/></td>
        <td><Chart data={pressure} color="blue" units={'hPa'}/></td>
        <td><Chart data={humidty} color="green" units={'%'}/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <tr>
          <th>Cities</th>
          <th>Temperature (&#8457;)</th>
          <th>Pressure (hPa)</th>
          <th>Humudity (%)</th>
        </tr>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
