import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const App = () => {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <div>
      <div><Toaster position='top-right'/></div>
    </div>
  )
}

export default App