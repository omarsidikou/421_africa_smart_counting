import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css'


// our InfoBox will have a titlen a Number of cases, and a total
function InfoBox({ title, caseType, cases, isRed, isGreen, isOrange, active, total, ...props }) {

    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isGreen && 'infoBox--green'} ${isOrange && 'infoBox--orange'}`}>
            <CardContent>
                {/* Title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                {/* Number of cases */}
                <h2 className={`${isRed && 'infoBox__deaths'} ${isGreen && 'infoBox__recovered'} ${isOrange && 'infoBox__cases'}`}>Today {cases}</h2>
                {/* Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    Total {caseType} {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
