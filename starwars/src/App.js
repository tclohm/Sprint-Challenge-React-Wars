import React, {useState, useEffect} from 'react';
import EmpireJumbotron from "./components/EmpireJumbotron";
import EmpireToast from "./components/EmpireToast";
import EmpireActivityCard from "./components/EmpireActivityCard";
import { Container, Row } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import {} from "reactstrap";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([])

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);


  useEffect(() => {

    axios.get("https://swapi.co/api/people/")
    .then( (response) => {
      console.log(response.data.results)
      setPeople(response.data.results)
    })
    .catch( (error) => {
      console.log("Error", error);
    })

  },[])

  return (
    <div className="App">
      <EmpireToast show={show} toggle={toggle}/>
      <EmpireJumbotron toggle={toggle}/>
      <Container>
        <Row>
          {people.map((person, index) => {
            return (<EmpireActivityCard key={index} name={person.name} height={person.height} homeworld={person.homeworld}/>);
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
