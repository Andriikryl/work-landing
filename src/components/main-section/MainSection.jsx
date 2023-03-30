import React from 'react'
import MenImage from '../../images/image-hero-desktop.png';
import MenImageMobile from '../../images/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'
import { Button } from '../button';

export const MainSection = () => {
  return (
    <section className='flex w-full mt-6'>
      <div className='relative w-2/4 text-left mt-12'>
        <h1 className='text-8xl font-black mt-60 whitespace-pre-line'>{`Make\n remote work`}</h1>
        <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}</p>
      <Button isFilled={true} >Learn more</Button>
      <div className='flex'>
        <Databiz/>
        <Audiophile/>
        <Meet/>
        <Maker/>
      </div>
      </div>
    </section>
  )
}
