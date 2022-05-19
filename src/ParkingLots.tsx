//@ts-nocheck 
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

const ParkingLots = ({ lots, selectParking }) => {
    const navigate = useNavigate()

    useEffect(() => {
    if (lots.length === 0) return navigate('/')
    }, [lots])

    return (
        <div style={{ padding: "5%" }}>
               <Grid container spacing={2}>
            {
                lots.map((item) => {
                    return(
                        <Grid item xs={4} key={item.id}>
                        <Card sx={{ minWidth: 275 }} style={{ width: "fit-content", background: "aliceblue" }}>
                        <CardContent>
                            <h4>Slot-{item.id}</h4>
                        </CardContent>
                        <CardContent style={{display: "flex"}}>
                            {
                                item.vehicleIds.map((item)=> {return(
                                    <ul><li></li></ul>
                                )}
                                )
                            }
                            </CardContent>
                        <CardActions>
                            {
                                item.vehicleIds.length > 4 ?
                                <p>Parking Occupied</p> :
                            <Button style={{ background: "lightgrey"}} onClick={() => selectParking(item.id)}>Alot Parking</Button>
                            }
                        </CardActions>
                    </Card>
                    </Grid>
                    )
                })
            }
            </Grid>
        </div>
    )
}

export default ParkingLots