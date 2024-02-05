import React from 'react'
import ChildToParent1 from './ChildToParent1'
//Parent Component 
function ChildToParent() {
    function  ChildParent(data ) {
        alert(data);
    }
  return (
    <div> 
        <ChildToParent1
        alert ={ChildParent}
        />
    </div>
  )
}

export default ChildToParent