import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import classes from './ChartGraph.module.css';

export default class ChartGraph extends Component {
    state = {
        groupedBarsChartData: {
            labels: ["Midnight-04 AM", "04 AM - 08 AM", "08 AM -12 PM", "12 PM - 04 PM", "04 PM - 8 PM", "08 PM - Midnight"],
            datasets: [
                {
                    label: "Mombasa Road (sensor_1)",
                    backgroundColor: "#3e95cd",
                    data: [133, 221, 783, 2478, 133, 221,]
                }, {
                    label: "Nairobi_central (sensor_2)",
                    backgroundColor: "#8e5ea2",
                    data: [408, 547, 675, 734, 408, 547]
                },
                {
                    label: "Test_sensor_2",
                    backgroundColor: "#8e5ea2",
                    data: [408, 547, 675, 734, 408, 547,]
                }
            ]
        }
    }
    render() {
        // const chartOptions = {
        //     responsive: false,
        //     legend: {
        //         align: "center",
        //     }
        // }

        return (
            <div className={classes.barContainer}>
                <Typography>#421 Africa smart Counting</Typography>
                <Typography>Average people during the day for the city of Nairobi</Typography>
                <Bar data={this.state.groupedBarsChartData}
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
                    height={250} />
            </div>
        )
    }
}