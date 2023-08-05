import React,{useEffect} from 'react'

function About() {
  // useEffect(() => {
  //   console.log("about page is mounted")
  //   return () => {
  //     console.log("about page will unmount")
  //   }
  // }, [])
  return (
    <div className='aboutPage'><h3 style={{color:'blue'}}>This is About Page</h3></div>
  )
}

export default About