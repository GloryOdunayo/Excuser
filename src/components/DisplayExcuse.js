import React from 'react'

const DisplayExcuse = ({content,button,style}) => {
  return (
    <>
        <div className={style}>
            <div className="texy-center">{button}</div>
            <p className="quote fw-bold text-center">{content}</p>
        </div>
    </>
  )
}

export default DisplayExcuse