//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import CreateParking from './CreateParking'
import ParkingLots from './ParkingLots'
import VehicleDetail from "./VehicleDetail"
import {SLOT_LIMIT} from './constant'

const AppRotue = () => {
  const [numOfParking, setNumOfParking] = useState("")
  const [lots, setLots] = useState([])
  const [registerNumber, setRegisterNumber] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState(false)
 
  const CreateParkingLots = () => {
    // const refLots = [...Array(parseInt(numOfParking)).keys()]
    const validation = SLOT_LIMIT.test(numOfParking)
    if(validation) {
      setError(true)
    }
    else {
    const refLots = []
    for (var i = 1; i <= numOfParking; i++) {
      refLots.push({ id: i, vehicleIds: [] })
    }
    setLots(refLots)
    navigate("/parking-lots");
    setNumOfParking("")
  }
  }

  const selectParking = (id) => {
    navigate(`/vehicle-detail/${id}`);
  }

  const alotParking = (slotId) => {
    const parkedVehicles = [...lots].map(item => {
      if (item.id == slotId) {
        if (item.vehicleIds.length < 5) {
          return {
            ...item,
            vehicleIds: [...item.vehicleIds, registerNumber]
          }
        }
      }
      return item
    })
    setLots(parkedVehicles)
    navigate('/parking-lots')
    setRegisterNumber('')
  }

  return (
    <Routes>
      <Route path="/" 
        element={<CreateParking 
          numOfParking={numOfParking} 
          setNumOfParking={setNumOfParking} 
          error={error}
          CreateParkingLots={CreateParkingLots} 
        />} 
      />
      <Route path="/parking-lots" 
        element={<ParkingLots lots={lots} selectParking={selectParking} />} />
      <Route path="/vehicle-detail/:id" 
        element={<VehicleDetail 
        registerNumber={registerNumber} 
        setRegisterNumber={setRegisterNumber} 
        alotParking={alotParking} />} 
      />
    </Routes>
  )
}
export default AppRotue