import React from "react";
import DefaultLayout from '../../sharedModules/default'
import Banner from '../../Components/banner'
import WhatDoge from '../../Components/whatDoge'
import OurStory from '../../Components/ourStory'
import Collection from '../../Components/collection'
import Partners from '../../Components/partners'
import Team from '../../Components/team'
import Whitepaper from '../../Components/whitepaper'
import Roadmap from '../../Components/roadmap'
import FAQ from '../../Components/faq'


const Index = () => {
  return (
    <DefaultLayout>
      <Banner/>
      <WhatDoge/>
      <section className="story-bg">
        <OurStory/>
      </section>
      <section className="pb-0">
        <Collection/>
      </section>
      <Partners/>
      <div className="twr-bg">
        <Team/>
        <Whitepaper/>
        <Roadmap/>
      </div>
      <FAQ/>
    </DefaultLayout>
  )
}

export default Index;