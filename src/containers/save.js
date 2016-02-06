return (
  <tr key={cityName}>
    <td><GoogleMap lat={lat} lon={lon} /></td>
    <td><Chart data={temperature} color="orange" units={'F'} /></td>
    <td><Chart data={pressure} color="blue" units={'hPa'} /></td>
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
