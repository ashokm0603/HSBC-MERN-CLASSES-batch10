import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = (props) => {
  return (
    <div>
      <ChildComponent user={props.user} product={props.data}/>
    </div>
  )
}

export default ParentComponent
