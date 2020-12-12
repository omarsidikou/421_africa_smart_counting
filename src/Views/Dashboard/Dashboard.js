import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../Components/Dashboard/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
// import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from "../../mockData";

import all from '../../data/all.json';
import Nairobi from '../../data/Nairobi.json'
import ChartGraph from '../../Components/Dashboard/ChartGraph';

export default class Dashboard extends Component {
    state = {
        // data: managerData,
        // average: nationalAverageData,
        // labels: yearLabels,
        labels: [],
        persMoyenNbre: [],
        PollutionNbre: [],
        labelNairobi: [],
        dataMombasa: [],
        dataNairobiCentral: [],
        dataTestSensor2: [],

    }


    componentDidMount() {

        const getALlJson = async () => {
            // await fetch("https://ces-iot-scan-wifi-devices.s3-eu-west-1.amazonaws.com/africa_smart_counting/konnectData.json").then((data) => {
            //     console.log(data);
            // })
            // axios({
            //     url: 'https://ces-iot-scan-wifi-devices.s3-eu-west-1.amazonaws.com/africa_smart_counting/konnectData.json',
            //     method: 'get'
            // }).then((response) => console.log(response))
        }
        all.forEach((data) => {
            this.setState({
                persMoyenNbre: data.persMoyenNbre,
                PollutionNbre: data.PollutionNbre,
                labels: data.label
            })
        });

        Nairobi.forEach((data) => {
            this.setState({
                labelNairobi: data.labelNairobi,
                dataMombasa: data.dataMombasa,
                dataNairobiCentral: data.dataNairobiCentral,
                dataTestSensor2: data.dataTestSensor2,

            })
        })

        getALlJson()
    }


    // handleButtonClick = e => {
    //     const { value } = e.target;
    //     const isAnnual = value === "annual";

    //     const newData = isAnnual ? managerData : managerQuarterData;
    //     const newLabels = isAnnual ? yearLabels : quarterLabels;
    //     const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;



    //     this.setState({
    //         data: newData,
    //         average: newAverage,
    //         labels: newLabels
    //     })
    // }

    render() {
        const { labels, persMoyenNbre, PollutionNbre, dataMombasa, dataNairobiCentral, dataTestSensor2, labelNairobi } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h3 style={{ color: "gray" }}>Histogramme de données d'aujourd'hui</h3>
                </header>

                {/* <div className={classes.buttonContainer}>
                    <button
                        value="annual"
                        onClick={this.handleButtonClick}
                    >
                        Annual
                    </button>

                    <button
                        value="lastquarter"
                        onClick={this.handleButtonClick}
                    >
                        Last Quarter
                    </button>
                </div> */}

                <LineGraph
                    data={persMoyenNbre}
                    average={PollutionNbre}
                    labels={labels} />
                <br />
                <br />
                <ChartGraph data={dataMombasa} average={dataNairobiCentral} test={dataTestSensor2} labels={labelNairobi}
                />

            </div>
        )
    }
}
