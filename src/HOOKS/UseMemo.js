import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, SetCount] = useState(10)
    const [no, setNo] = useState(100)
      const multiCount = useMemo(
        function  Update() {
        console.log("multicount");
        return count  
        
    },[count ])

return (
    <div>
        <h1> Total :{ count}</h1>
        <h1> Total :{no}</h1>
        <h1> {multiCount}</h1>
        <button onClick={() => SetCount(count + 1)}> Update count</button>
        <button onClick={() => setNo(no * 2)}> Update No</button>

    </div>
)
}

export default UseMemo