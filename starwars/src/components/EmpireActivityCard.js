import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Col, Card, CardHeader, CardBody,
  CardTitle } from 'reactstrap';

export default function EmpireActivityCard(props) {
  
  const {key, name, height, homeworld} = props

  const [hwName, setHwName] = useState("Unknown Origin")

  useEffect( () => {
    axios.get(homeworld)
          .then( (response) => {
            console.log(response.data)
            setHwName(response.data.name)
          })
          .catch( (error) => {
            console.log("error", error)
          })
  },[homeworld])

  const opacityHalf = {
    "background-color": "rgba(255, 255, 255, 0.2)"
  }

  const opacityOne = {
    "color": "rgba(255, 255, 255, 1)"
  }

  return (
    <Col xs="12" md="6" key={key}> 
      <Card style={opacityHalf}>
        <CardHeader style={opacityOne}><i className="fas fa-money-check-alt"></i> {height} credits given</CardHeader>
        <CardBody>
          <CardTitle style={opacityOne}>The Empire thanks you, {name} from {hwName}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  )
}