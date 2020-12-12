import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../Components/Dashboard/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
// import { managerData, nationalAverageData, yearLabels, managerQuarterData, nationalAverageQuarterData, quarterLabels } from "../../mockData";

import all from '../../data/all.json'
import ChartGraph from '../../Components/Dashboard/ChartGraph';

export default class Dashboard extends Component {
    state = {
        // data: managerData,
        // average: nationalAverageData,
        // labels: yearLabels,
        labels: [],
        persMoyenNbre: [],
        PollutionNbre: []
    }

    componentDidMount() {
        all.forEach((data) => {
            this.setState({
                persMoyenNbre: data.persMoyenNbre,
                PollutionNbre: data.PollutionNbre,
                labels: data.label
            })
        });
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
        const { labels, persMoyenNbre, PollutionNbre } = this.state;
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
                <ChartGraph
                />

            </div>
        )
    }
}
