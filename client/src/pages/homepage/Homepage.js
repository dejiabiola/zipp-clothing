import React, { Profiler } from 'react'
import Directory from '../../components/directory/Directory'
import { HomepageContainer } from './homepage.styles'



const HomePage = () => {
  // throw Error;
  return (
    <HomepageContainer>
      <Profiler id="Directory" onRender={(id, phase, actualDuration) => console.log({ id, phase, actualDuration })}>
        <Directory />
      </Profiler>
    </HomepageContainer>)
}


export default HomePage