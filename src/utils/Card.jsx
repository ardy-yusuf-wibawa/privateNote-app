import React from 'react'

const Card = ({ className, children }) => {
  const classes =
    ' card w-[350px] h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100' +
    className

  return <div className={classes}>{children}</div>
}

export default Card
