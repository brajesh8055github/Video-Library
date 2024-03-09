import React from 'react'
const Vcontainer = ({video,title,desc}) => {
  return (
    <div>
        <div>
            <div className="content2">
                <video src={video} controls />
                <h6 className='m-0'>{title}</h6>
                <small style={{color:"grey"}}>{desc}</small>
                </div>
        </div>
    </div>
  )
}

export default Vcontainer