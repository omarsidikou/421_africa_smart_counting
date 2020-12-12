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
        const { data, average, test, labels } = this.props;


        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Mombasa Road (sensor_1)",
                        data: data,
                        fill: false,
                        borderColor: "orange"
                    },
                    {
                        label: "Nairobi_central (sensor_2)",
                        data: average,
                        fill: false,
                        borderColor: "green"
                    },
                    {
                        label: "Test_sensor_2",
                        data: test,
                        fill: false,
                        borderColor: "gray"
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