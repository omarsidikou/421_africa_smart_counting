import React, { useEffect, useState } from 'react';
import { MapContainer as MapLeafleat, Marker, Popup, TileLayer } from 'react-leaflet';
import './MapContainer.css';
import konnectData from '../../data/konnectData.json';
import { Card, Typography } from '@material-ui/core';

function MapContainer() {

    const [dataKonnect, setDataKonnect] = useState([]);


    useEffect(() => {
        setDataKonnect(
            konnectData.map(data => [
                {
                    "long": data.lon,
                    "lat": data.lat,
                    "tranche_horaire_jour": data.tranche_horaire_jour,
                    "nbrePersMoyen0004": data.nbrePersMoyen0004,
                    "niveauPolution0004": data.niveauPolution0004,
                    "nbrePersMoyen0408": data.nbrePersMoyen0408,
                    "niveauPolution0408": data.niveauPolution0408,
                    "nbrePersMoyen0812": data.nbrePersMoyen0812,
                    "niveauPolution0812": data.niveauPolution0812,
                    "tranche_horaire_soir": data.tranche_horaire_soir,
                    "nbrePersMoyen1216": data.nbrePersMoyen1216,
                    "niveauPolution1216": data.niveauPolution1216,
                    "nbrePersMoyen1620": data.nbrePersMoyen1620,
                    "niveauPolution1620": data.niveauPolution1620,
                    "nbrePersMoyen2024": data.nbrePersMoyen2024,
                    "niveauPolution2024": data.niveauPolution2024,
                }
            ])
        )

        // konnectData.map((data) =>
        //     setDataKonnect(...dataKonnect,
        //         {
        //             "long": data.lon,
        //             "lat": data.lat,
        //         })


        // )



    }, [])

    // console.log(dataKonnect);
    return (
        <div className="mapContainer">
            <MapLeafleat center={[9.1021, 9.1021]} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    dataKonnect?.map((data) => {
                        return (
                            <Marker position={[data[0]?.long, data[0]?.lat]}>
                                <Popup className="mapContainerPopUp">
                                    <Card className="mapContainer__popUpCard">
                                        <div className="mapContainer__popUpDayContainer">
                                            <Typography variant="h5">
                                                {data[0].tranche_horaire_jour}
                                            </Typography>
                                            <div className="mapContainer__popUpMainContainer">
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 00H à 04H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen0004}<strong> personnes <br />
                                                        </strong>{data[0].niveauPolution0004}%</strong> de polution
                                                </Typography>
                                                </div>
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 04H à 08H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen0408}</strong> personnes <br />
                                                        <strong>{data[0].niveauPolution0408}%</strong> de polution
                                                </Typography>
                                                </div>
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 08H à 12H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen0812}</strong> personnes <br />
                                                        <strong>{data[0].niveauPolution0812}%</strong> de polution
                                                </Typography>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mapContainer__popUpafterNoonContainer">
                                            <Typography variant="h5">
                                                {data[0].tranche_horaire_soir}
                                            </Typography>
                                            <div className="mapContainer__popUpMainContainer">
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 12H à 16H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen1216}</strong> personnes <br />
                                                        <strong>{data[0].niveauPolution1216}%</strong> de polution
                                                </Typography>
                                                </div>
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 16H à 20H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen1620}</strong> personnes <br />
                                                        <strong>{data[0].niveauPolution1620}%</strong> de polution
                                                </Typography>
                                                </div>
                                                <div className="mapContainer__popUpSingleContainer">
                                                    <Typography variant="body2">
                                                        De 20H à 00H du matin:
                                                </Typography>
                                                &nbsp;
                                                <Typography variant="body1">
                                                        <strong>{data[0].nbrePersMoyen2024}</strong> personnes <br />
                                                        <strong>{data[0].niveauPolution2024}</strong>% de polution
                                                </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapLeafleat>
        </div>
    )
}

export default MapContainer
