
import React from 'react'

import AllServiceInfo from '../AllServiceInfo/AllServiceInfo'
import ProjectIntro from '../ProjectIntro/ProjectIntro'

const FirstProject = () => {
  return (
    <div>
        <ProjectIntro  paragraph="Software Engineer" linkText="HOME"  linkTo="/" />
       
        <AllServiceInfo/>
    </div>
  )
}

export default FirstProject