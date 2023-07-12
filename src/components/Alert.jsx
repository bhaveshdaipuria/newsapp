import React from 'react'

function Alert({alertText, colorStatus}) {
  return (
     <div className={`alert alert-${colorStatus} text-center`} role="alert">
      {alertText}
    </div>
  )
}

export default Alert;
