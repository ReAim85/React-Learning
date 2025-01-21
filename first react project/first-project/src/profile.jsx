import React, { useState } from 'react'

function Profile() {

const [reqSent, setReq] = useState(false);
let text = reqSent ? "req Sent" : "add Friend";

const color = {
    backgroundColor: reqSent ? "green" : "blue",
}

  return (
    <div>
      <button style={color} onClick={() => setReq(true)}>{text}</button>
    </div>
  )
}

export default Profile
