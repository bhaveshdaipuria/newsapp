import React from 'react'

function ModeSwitch({toggleMode, modeTxt}) {
  return (
    <div className="form-check form-switch mr-20">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" value="1" onClick={toggleMode}/>
    <label className="form-check-label text-white" htmlFor="flexSwitchCheckChecked">{modeTxt}</label>
    </div>
  )
}

export default ModeSwitch;
