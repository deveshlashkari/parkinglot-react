//@ts-nocheck
import react, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateParking = ({ numOfParking, setNumOfParking, CreateParkingLots, error }: Props) => {

    return (
        <div style={{ textAlign: "center", display: "inline-grid" }}>
            <h2>Create Prackings</h2>
            <TextField id="outlined-basic"
                label="Number of parking lot"
                variant="outlined"
                type="number"
                value={numOfParking}
                onChange={(e) => {
                  setNumOfParking(e.target.value)
                }}
            />
            {error&&"Limit is exceed"}
            <Button
                data-test-id="btn-create"
                style={{background: !numOfParking? "#acbfe0": "cornflowerblue",  marginTop: 15, color:"black"}}     
                disabled={!numOfParking}
                onClick={ CreateParkingLots}>Submit
            </Button>
        </div>
    )
}

export default CreateParking