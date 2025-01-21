import React, { useState, useEffect } from 'react'

function App() {
  const [count , setCount] = useState(1)

  useEffect(() => {setInterval(() => {
    console.log("inside useEffect")
    setCount (count => count + 1)
  }, 1000)}, []
)

  return (
    <div>
      <div style={{width: 20, height: 20, backgroundColor: "red", borderRadius: 20, textAlign: "center", marginLeft: 20}}>
        {count}
      </div>
      <img src="https://cdn-icons-png.freepik.com/256/16601/16601593.png?semt=ais_hybrid" style={{width: 30, height: 30}}/>


      {/* <div>
        <button onClick={increaseCount}>increase Button</button>
      </div> */}
    </div>
  )
}

export default App