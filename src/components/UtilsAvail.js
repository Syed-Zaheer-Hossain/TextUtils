import React from 'react'

function UtilsAvail(props) {
  return (
    <div>
        <div className='utils-div'>
            <div className={`about-heading acc-${props.mode}`}>Utilities Available</div>
            <ul className={`utils-list acc-${props.mode}`}>
                <li>Convert to UpperCase</li>
                <li>Convert to LowerCase</li>
                <li>Convert the first letter to UpperCase</li>
                <li>Remove Extra spaces</li>
                <li>copy Text</li>
            </ul>
        </div>
    </div>
  )
}

export default UtilsAvail