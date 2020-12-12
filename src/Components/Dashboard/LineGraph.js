import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Number of Person",
                        data: data,
                        fill: false,
                        borderColor: "#6610f2"
                    },
                    {
                        label: "Percent of Polution",
                        data: average,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //Customize chart options
                legend: {
                    display: true
                },
                scales: {
                    // yAxes: [{
                    //     ticks: {
                    //         max: this.props.maxY,
                    //         min: 0,
                    //         stepSize: 3
                    //     }
                    // }]
                },
                //    title: {
                //     display: this.props.display,
                //     text: this.props.title
                //    }
            }
        });

    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}