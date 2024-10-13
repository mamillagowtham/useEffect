
import React from 'react'

import Count from './Component/Count'

const App = () => {
  let Status = false;
  return (
    <div>
      status ? <Count /> : <p>status false</p>
    </div>
    
  )
}

export default App