import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import classes from './ChartGraph.module.css';
import Chart from "chart.js";
let myChart2;

export default class ChartGraph extends Component {

    chartRef2 = React.createRef();

    componentDidMount() {
        this.buildChart2();
    }

    componentDidUpdate() {
        this.buildChart2();
    }

    state = {
        // groupedBarsChartData: {
        //     labels: ["Midnight-04 AM", "04 AM - 08 AM", "08 AM -12 PM", "12 PM - 04 PM", "04 PM - 8 PM", "08 PM - Midnight"],
        //     datasets: [
        //         {
        //             label: "Mombasa Road (sensor_1)",
        //             backgroundColor: "#3e95cd",
        //             data: [133, 221, 783, 2478, 133, 221,]
        //         }, {
        //             label: "Nairobi_central (sensor_2)",
        //             backgroundColor: "#8e5ea2",
        //             data: [408, 547, 675, 734, 408, 547]
        //         },
        //         {
        //             label: "Test_sensor_2",
        //             backgroundColor: "#8e5ea2",
        //             data: [408, 547, 675, 734, 408, 547,]
        //         }
        //     ]
        // }
    }

    buildChart2 = () => {
        const myChartRef2 = this.chartRef2.current.getContext("2d");
        const { data, average, test, labels } = this.props;

        if (typeof myChart2 !== "undefined") myChart2.destroy();

        myChart2 = new Chart(myChartRef2, {
            type: "bar",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: "Mombasa Road (sensor_1)",
                        data: data,
                        backgroundColor: "#3e95cd",

                    },
                    {
                        label: "Nairobi_central (sensor_2)",
                        data: average,
                        backgroundColor: "#3e95cd",
                    },
                    {
                        label: "Test_sensor_2",
                        data: test,
                        backgroundColor: "#8e5ea2",
                    },
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
        // const chartOptions = {
        //     responsive: false,
        //     legend: {
        //         align: "center",
        //     }
        // }

        return (
            <div>
                <Typography color="secondary">#421 Africa smart Counting</Typography>
                <Typography color="primary">Average people during the day for the city of Nairobi</Typography>
                <div className={classes.barContainer}>
                    <canvas
                        id="myChart2"
                        ref={this.chartRef2}
                    />
                </div>
                {/* <Bar data={this.state.groupedBarsChartData}
                    options={{
                        legend: {
                            display: true
                        },

                        title: {
                            display: this.props.display,
                            text: this.props.title
                        }
                    }}
                    width={350}
                    height={250} /> */}
            </div>
        )
    }
}