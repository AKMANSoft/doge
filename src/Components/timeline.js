import React from 'react'
import TimelineItem from './timelineItem'
import r1 from '../images/r1.png'
import r2 from '../images/r2.png'
import r3 from '../images/r3.png'
import r4 from '../images/r4.png'
import r5 from '../images/r5.png'

const Timeline = () => {
    return (
      <>
        <div className='timeline'>
          <TimelineItem 
            indicatorNum='1'
            imgSrc= {r1}
            list = {[{point: 'Create Social Media'}, {point: 'Create NFT Art'}]} />
          <TimelineItem 
            indicatorNum='2'
            imgSrc= {r2}
            list = {[{point: 'Process Business License and Gambling License in Malta'}, {point: 'Website Goes Live'}, {point: 'Project Launch'}]} />
          <TimelineItem 
            indicatorNum='3'
            imgSrc= {r3}
            list = {[{point: 'Mint opening for Genesis Collection'}, {point: 'First lottery draw'}]} />
          <TimelineItem 
            indicatorNum='4'
            imgSrc= {r4}
            list = {[{point: 'Phase 2 and Phase 3 Collections'}, {point: 'Arcade Development'}, {point: 'Metaverse Development'}]} />
          
          <TimelineItem 
            indicatorNum='5'
            imgSrc= {r5}
            list = {[{point: 'Arcade and Metaverse Launch'}, {point: 'More updates to come on exciting developments!!'}]} />
        </div>
      </>
    )
}

export default Timeline