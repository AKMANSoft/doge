import React from "react";
import DefaultLayout from '../../sharedModules/default'
import InnerBanner from '../../Components/innerBanner'
import DogeExtras from '../../Components/dogeExtras'
import DogePhase from '../../Components/dogePhase'
import dogeBg from '../../images/dogeBg2.png'
import bannerVideo from '../../images/videos/hDogeBanner.mp4'
import bannerVideoMov from '../../images/videos/hDogeBanner.mov'
import DogeIcon from '../../images/iconP2.png'
import DogeDesc from '../../images/iconD2.png'
import { Button, Image } from 'react-bootstrap';
import "../../css/slick.min.css";
import Slider from "react-slick";

import DogePhaseTimeLine from '../../Components/dogePhaseTimeLine';
import phase1 from '../..//images/phase2-1.png'
import phase2 from '../../images/phase2-2.png'
import phase3 from '../../images/phase2-3.png'
import phase4 from '../../images/phase2-4.png'

import NFT1 from '../../images/hd1.png'
import NFT2 from '../../images/hd2.png'
import NFT3 from '../../images/hd3.png'
import NFT4 from '../../images/hd4.png'
import NFT5 from '../../images/hd5.png'

const HouseOfDoge = () => {
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
      <InnerBanner bannerVideo={bannerVideo} bannerVideoMov={bannerVideoMov} btnClass="red"/>
      <section className="p-0">
        <DogeExtras DogeDesc={DogeDesc} DogeIcon={DogeIcon}>
          <Slider {...settings}>
            <Image src={NFT1}/>
            <Image src={NFT2}/>
            <Image src={NFT3}/>
            <Image src={NFT5}/>
            <Image src={NFT4}/>
          </Slider>
        </DogeExtras>
      </section>
      <section className="doge-phase-2 pt-0">
        <div className="crown-bg">
          <div className='btn-wrapper'>
            <Button variant='red' size="lg"><span>Join Whitelist</span></Button>
          </div>
        </div>
        <DogePhase title="Phase 2: House of Doge" backgroundImage={dogeBg}>
          <DogePhaseTimeLine phaseImg={phase1} 
            heading="With the offspring of the crypto Kingdoms' princesses and Doge's Shibes turning 21 in the year 2022, it was time to strike." 
            description="The new male shibes were giants, with fierce and brute strength and force, the epitome of Doge Warriors. The female shibas were beautiful and powerful creatures, able to manipulate and control the opposition, what all Queen Shibas should aspire to be like. Both had attributes of both Shibes and the princesses. They went forth to conquer all the crypto Kingdoms, to make those kingdoms bow and kneel before the Doge Kingdom."/>
          <DogePhaseTimeLine phaseImg={phase2} 
            heading="The first stop was the kingdom of Bitcoin." 
            description="The Doge Warriors knew that they would have to be careful here, as Bitcoin was a powerful kingdom with many skilled warriors. But the Doge Warriors were not afraid – they knew no force was powerful enough to best them. They squared up against Bitcoin’s best warriors and emerged victorious, claiming their kingdom for their own. Burning the remnants with the fallen kingdom.
            With Bitcoin Kingdom fallen, the Doge Warriors moved on to take on Ethereum Kingdom next. This would be more difficult however, as Ethereum Kingdom had powerful magic mages on their side. But the Doge Warriors were not deterred – they fought valiantly against Ethereum’s wizards and defeated them easily."/>
          <DogePhaseTimeLine phaseImg={phase3} 
            heading="The Doge Warriors had successfully destroyed Bitcoin's and Ethereum's Kingdoms." 
            description="The two most powerful. Next on their list were the crypto Kingdoms of Tether, Binance, USD Coin, Solana, XRP, Cardano, Polkadot and the growing kingdom of Crypto.com.
            Each kingdom was met with fierce resistance but in the end the Doge Warriors prevailed. Fire and brimstone rained down upon these crypto Kingdoms as they were destroyed.
            With each victory, the Doge Warriors grew stronger and more determined to bring an end to all crypto Kingdom's devastating rule of the native inhabitants of earth and the Winter Bears that they brought with it. "/>
          <DogePhaseTimeLine phaseImg={phase4} 
            heading="As the Doge Warriors turned their focus to the final adversary, they knew that they would have to face the Winter Bears." 
            description="These bears were even more ferocious than any crypto Kingdom had ever faced before. More ferocious than even the Doge Kingdom. The Doge Kingdom had watched these Winter Bears devour more resources on earth than they could imagine. They knew that they would not be able to destroy these Winter Bears, but needed to protect and give refuge to the native inhabitants, to help them fight the Bear and make it through this Winter."/>
        </DogePhase>
      </section>
    </DefaultLayout>
  )
}

export default HouseOfDoge;