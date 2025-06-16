
import React from 'react'
import Project1 from '../ProjectIntro/ProjectIntro'
import AllServiceInfo from '../AllServiceInfo/AllServiceInfo'
import ProjectIntro from '../ProjectIntro/ProjectIntro'

const SecondProject = () => {
  return (
    <div>
        <ProjectIntro  paragraph="Electrical Engineer" linkText="HOME"  linkTo="/" />
      
        <AllServiceInfo/>
    </div>
  )
}

export default SecondProject