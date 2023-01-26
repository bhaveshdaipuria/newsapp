import React from 'react'

function Alert({loginText, colorStatus}) {
  return (
     <div className={`alert alert-${colorStatus} text-center`} role="alert">
      {loginText}
    </div>
  )
}

export default Alert;
