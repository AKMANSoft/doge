import React from "react";
import DefaultLayout from '../../sharedModules/default'
import InnerBanner from '../../Components/innerBanner'
import DogeExtras from '../../Components/dogeExtras'
import DogePhase from '../../Components/dogePhase'
import dogeBg from '../../images/dogeBg3.png'
import bannerVideo from '../../images/videos/shibaBanner.mp4'
import bannerVideoMov from '../../images/videos/shibaBanner.mov'
import DogeIcon from '../../images/iconP3.png'
import DogeDesc from '../../images/iconD3.png'
import { Button, Image } from 'react-bootstrap';
import "../../css/slick.min.css";
import Slider from "react-slick";


import DogePhaseTimeLine from '../../Components/dogePhaseTimeLine';
import phase1 from '../..//images/phase3-1.png'
import phase2 from '../../images/phase3-2.png'
import phase3 from '../../images/phase3-3.png'
import phase4 from '../../images/phase3-4.png'

import NFT1 from '../../images/hos1.png'
import NFT2 from '../../images/hos2.png'
import NFT3 from '../../images/hos3.png'
import NFT4 from '../../images/hos4.png'

const HouseOfShiba = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '50px',
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1, slidesToScroll: 1,
  }
  return (
    <DefaultLayout>
      <InnerBanner bannerVideo={bannerVideo} bannerVideoMov={bannerVideoMov} btnClass="yellow"/>
      <section className="p-0">
        <DogeExtras DogeDesc={DogeDesc} DogeIcon={DogeIcon}>
          <Slider {...settings}>
            <Image src={NFT1}/>
            <Image src={NFT2}/>
            <Image src={NFT3}/>
            <Image src={NFT4}/>
            <Image src={NFT2}/>
            <Image src={NFT3}/>
          </Slider>
        </DogeExtras>
      </section>
      <section className="doge-phase-3 pt-0">
        <div className="crown-yellow-bg">
          <div className='btn-wrapper'>
            <Button variant='yellow' size="lg"><span>Join Whitelist</span></Button>
          </div>
        </div>
        <DogePhase title="Phase 3: House of Shiba" backgroundImage={dogeBg}>
          <DogePhaseTimeLine phaseImg={phase1} 
            heading="The Queen Shibas had a masterful plan." 
            description="While the Doge Warriors may have won the battles with force and fire and violence, the war against the Winter Bears was to be won with the cunningness and strategy of the Queen Shibas. They were not called the 'Queen' for nothing, as everyone knows, the most powerful piece on the board, is the Queen. "/>
          <DogePhaseTimeLine phaseImg={phase2} 
            heading="The Queen Shibas saw each crypto Kingdom had useless pets on yachts that could be put to good use." 
            description="The Queen Shibas took these useless pets off the yachts and made sure that they would no longer be useless or bored, making them the Queen Shibas' personal Butler Apes. The Queen Shibas saw the value of the Ethereum Kingdom's mages' magic. They may have not been the best warriors or formidable against the Doge Warriors, but they had there valuable gifts in building, record keeping and the Queen  Shibas saw a way this could help win the war against the Winter Bears.  The Queen Shibas saw the stability that was had between native inhabitants and USDC Kingdom that should be taken advantage of. "/>
          <DogePhaseTimeLine phaseImg={phase3} 
            heading="As the Winter Bears threaten and wage war on the native inhabitants and the crypto Kingdoms, the Doge Kingdom knows that they need to act fast." 
            description="They know that they cannot win the war against these bears with brute force or alone. They would need to increase the talents of the native inhabitants to give them the power to fight the Winter Bears. The Doge Kingdom used the Ethereum Kingdom to build a large structure that could house the Doge Warriors and Queen Shibas with Doge Warrior's training 2 native inhabitants and the Queen Shibas training 1 native inhabitant."/>
          <DogePhaseTimeLine phaseImg={phase4} 
            heading="The Doge Kingdom called this the Arcade and built a large property in space in the Wonder Land metaverse." 
            description="This Arcade in the Wonder Land Metaverse would give the native inhabitants training in many different ancient forms of battle. Hand to Hand combat, strategy,  the power of fruit and how to beat ghosts, and varying forms of space warfare. 
            The native inhabitants are amazed at what this Arcade provides. They cannot wait to test their abilities in the varying battle simulations! "/>
        </DogePhase>
      </section>
    </DefaultLayout>
  )
}

export default HouseOfShiba;