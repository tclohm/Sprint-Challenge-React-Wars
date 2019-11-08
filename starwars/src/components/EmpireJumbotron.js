import React from "react";
import { Jumbotron, Button } from "reactstrap";
//import styled from "styled-components";


export default function EmpireJumbotron(props) {

	const {toggle}= props

	const opacityZero = {
    "backgroundColor": "rgba(0, 0, 0, 0)"
	};

	const opacityOne = {
		"color": "rgba(255, 255, 255, 1)"
	}

	const opacityHalf = {
		"backgroundcColor": "rgba(255, 255, 255, 0.5)"
	}


	return (
		<div>
	    <Jumbotron style={opacityZero}>
	       <h1 className="display-4" style={opacityOne}>GALAXIAN COMERADES</h1>
	       <p className="lead" style={opacityOne}>You can help Darth Sidious win the War against the Republic</p>
	       <p style={opacityOne}>Defend your planet, support the Galaxy...and buy Empire War Bonds!</p>
	       <p className="lead">
	          <Button color="primary" onClick={toggle}>BUY</Button>
	       </p>
	       <hr className="my-2" style={opacityHalf}/>
	     </Jumbotron>
	   </div>
	);
};