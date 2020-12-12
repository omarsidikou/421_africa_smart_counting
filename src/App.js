import './App.css';
import InfoBox from './Components/InfoBox/InfoBox';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Views/Dashboard/Dashboard';
import MapContainer from './Views/MapContainer/MapContainer';
import Nairobi from './data/Nairobi.json';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
// import MultiAxe from './Components/MultiAxe';

function App() {



  const [totalMombassa, setTotalMonbassa] = useState(0);
  const [totalNairobiCentral, setTotalNairobiCentral] = useState(0);
  const [totalTestSensor3, setTotalTestSensor3] = useState(0);


  useEffect(() => {
    Nairobi.forEach((data) => {
      setTotalMonbassa(data.averageMombassa);
    });

    Nairobi.forEach((data) => {
      setTotalNairobiCentral(data.averageNairobiCentral);
    })
    Nairobi.forEach((data) => {
      setTotalTestSensor3(data.averageTestSensor3);
    })
  })
  return (
    <div className="app">
      <Navbar />
      <div className="app__stats">
        <Grid container justify="space-around">
          <Grid item xs={12} sm={10} md={3} lg={3} xl={3} style={{ marginBottom: 10 }}>
            <InfoBox active title="Mombasa Road(Sensor 1)" total={totalMombassa} />
          </Grid>
          <Grid item xs={12} sm={10} md={3} lg={3} xl={3} style={{ marginBottom: 10 }}>
            <InfoBox active title="Nairobi central (Sensor 2)" total={totalNairobiCentral} />
          </Grid>
          <Grid item xs={12} sm={10} md={3} lg={3} xl={3} style={{ marginBottom: 10 }}>
            <InfoBox active title="Test Lopy (Sensor 3)" total={totalTestSensor3} />
          </Grid>


        </Grid>
      </div>
      <div className="app__container">
        <Grid container >
          <Grid item xs={12} sm={10} lg={7} xl={7}>
            <div className="app__left">
              <h1 style={{ fontSize: 20, fontWeight: "bold", color: "#843f09" }}>People counting solution based on smartphone Wi-fi Device</h1>
              <MapContainer />
            </div>
          </Grid>
          <Grid item xs={11} sm={12} md={12} lg={4} xl={4}>
            <div className="app__right">
              <Dashboard />
            </div>
          </Grid>
        </Grid>


      </div>

    </div>
  );
}

export default App;
