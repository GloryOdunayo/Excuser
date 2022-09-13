import React from 'react'

const Buttons = ({family,children,party,college,office}) => {
  return (
    <>
        <div className="col-7 mx-auto text-center shadow-sm mb-5 p-5">
            <button className="btn btn-warning mx-3 btn-lg" onClick={family}>Family</button>
            <button className="btn btn-info mx-3 btn-lg" onClick={office}>Office</button>
            <button className="btn btn-success mx-3 btn-lg" onClick={children}>Children</button>
            <button className="btn btn-primary mx-3 btn-lg" onClick={college}>College</button>
            <button className="btn btn-secondary mx-3 btn-lg" onClick={party}>Party</button>
        </div>
    </>
  )
}

export default Buttons