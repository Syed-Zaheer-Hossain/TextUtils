import React from 'react'

function Alerts(props) {
  return (
    props.Alrt && <div className="warning-alert">
        <strong>{props.Alrt.type}</strong> &nbsp;  :   &nbsp; {props.Alrt.msg}
    </div>
  )
}

export default Alerts;