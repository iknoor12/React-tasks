import React from 'react'

const Child = ({increamentNumber}) => {
    console.log("child is rendering")
  return (
    <div>
      <button onClick={increamentNumber}>number</button>
    </div>
  )
}

export default React.memo(Child)
