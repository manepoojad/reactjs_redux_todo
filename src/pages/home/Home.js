import React, { useEffect } from 'react'

function Home() {
  // useEffect(() => {
  //   console.log("home page is mounted")
  //   return () => {
  //     console.log("home page will unmount")
  //   }
  // }, [])
  return (
    <div className='homepage' style={{backgroundColor:'orange', width: "100%"}}><h2 style={{ color: 'burlywood' }}> This is Home Page</h2>
    </div>

  )
}

export default Home