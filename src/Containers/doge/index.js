import React from "react";
import DefaultLayout from '../../sharedModules/default'
import InnerBanner from '../../Components/innerBanner'
import DogeExtras from '../../Components/dogeExtras'
import DogePhase from '../../Components/dogePhase'
import dogeBg from '../../images/dogeBg.png'
import bannerVideo from '../../images/videos/dogeBanner.mp4'
import bannerVideoMov from '../../images/videos/dogeBanner.mov'
import DogeIcon from '../../images/iconP1.png'
import DogeDesc from '../../images/iconD1.png'
import { Button, Image } from 'react-bootstrap';
import "../../css/slick.min.css";
import Slider from "react-slick";

import DogePhaseTimeLine from '../../Components/dogePhaseTimeLine';
import phase1 from '../..//images/phase1.png'
import phase2 from '../../images/phase1-2.png'
import phase3 from '../../images/phase1-3.png'
import phase4 from '../../images/phase1-4.png'

import NFT1 from '../../images/d1.png'
import NFT2 from '../../images/d2.png'
import NFT3 from '../../images/d3.png'
import NFT4 from '../../images/d4.png'
import NFT5 from '../../images/d5.png'

const Doge = () => {
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
      <InnerBanner bannerVideo={bannerVideo} bannerVideoMov={bannerVideoMov}/>
      <section className="p-0">
        <DogeExtras DogeDesc={DogeDesc} DogeIcon={DogeIcon}>
          <Slider {...settings}>
            <Image src={NFT1}/>
            <Image src={NFT2}/>
            <Image src={NFT3}/>
            <Image src={NFT4}/>
            <Image src={NFT5}/>
            <Image src={NFT3}/>
          </Slider>
        </DogeExtras>
      </section>
      <section className="doge-phase-1">
        <div className="text-center mb-5">
          <div className='btn-wrapper'>
            <Button variant='purple' size="lg"><span>Join Whitelist</span></Button>
          </div>
        </div>
        <DogePhase title="Phase 1: Doge is the new gold" backgroundImage={dogeBg}>
          <DogePhaseTimeLine phaseImg={phase1} 
            heading="The Doge Kingdom had long been aware of the power that lay within the princesses of the crypto kingdoms." 
            description="These princesses were so powerful, they were referred to as MCs or Main Characters. If they were to be taken as wives, it would lead to stronger and more powerful off-spring, with features that resembled the ones of earthly inhabitants. "/>
          <DogePhaseTimeLine phaseImg={phase2} 
            heading="So the Doge Kingdom sent down their best Shibes to claim the crypto MCs and take them as wives." 
            description="They knew that they could not be stopped or caught, as their speed was no match for the much slower crypto Kingdoms.  They were not afraid – they playfully smiled in the face of these challenges. The Shibes went about their task stealthily, surrounding each princess and taking them as wives in secret. "/>
          <DogePhaseTimeLine phaseImg={phase3} 
            heading="As the Shibes began to steal the MCs from the crypto kingdoms, the crypto kingdoms took notice and were terrified. " 
            description="They began to inflate their own armies. To do this, they had to syphon resources from the native inhabitants of earth. This began to become harder and harder as they failed to produce what they had promised and the crypto Kingdoms couldn't keep it up for long.  The crypto Kingdoms' greed and self-inflations' brought the Winter upon them all, and with the winter, comes the big bad Bears of Winter. These Winter Bears were formidable and wouldn't be easily put to sleep. The power of the Bears were shown as they dismantled the Terra Luna kingdom without much effort at all."/>
          <DogePhaseTimeLine phaseImg={phase4} 
            heading="The Shibes during this went about doing good and helping the native inhabitants. Knowing that this is the way to beating the Winter Bears." 
            description="The Doge Kingdom could do this due to their speed and their superiority to the other crypto Kingdoms. The Shibes devised a plan, a plan to allow the native inhabitants to weather the Winter Bears storm.  When they maneuvered from crypto Kingdom to crypto Kingdom, they were able to build a discreet building in the Ethereum Kingdom where they could hide and lay in wait while their offspring came to fighting age.
            They called this base, the DeLot Here they allowed a native inhabitant to hide as they nurtured the young shibe offspring. Each shibes native inhabitant could use the building and gather resources. They continued to Doing Only Good Everyday and enriching the native inhabitants. The next step would be Phase 2.  "/>
        </DogePhase>
      </section>
    </DefaultLayout>
  )
}

export default Doge;