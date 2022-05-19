//@ts-nocheck
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom'

const VehicleDetail = ({ registerNumber, setRegisterNumber, alotParking }: Props) => {
    const { id } = useParams()

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Create Prackings</h2>
            <TextField id="outlined-basic"
                label="Enter Register number"
                variant="outlined"
                value={registerNumber}
                onChange={(e) => setRegisterNumber(e.target.value)}
            />
            <Button onClick={() => alotParking(id)}>Alot Parking</Button>
        </div>
    )
}

export default VehicleDetail