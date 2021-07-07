import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";


export default function EmpireToast(props) {

	const { show, toggle } = props

	return (
		<div className="p-3 my-2 rounded bg-docs-transparent-grid">
      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>
          Thank you <i className="fab fa-galactic-republic"></i>
        </ToastHeader>
        <ToastBody>
          <i className="fas fa-money-check-alt"></i> You've bought 40,000 credits worth of war bonds from the Empire!
        </ToastBody>
      </Toast>
    </div>
  )
}