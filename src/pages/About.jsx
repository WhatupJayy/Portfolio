import React from 'react'

const About = () => {
  return (
    <div className='bg-black text-white'>
      <div className='flex items-center font-kohoRegular'>
        <div className='ml-28 mt-20'>
            <div className='bg-contain bg-no-repeat bg-[url("./assets/Rectangle3.png")] w-56 h-40'></div>
        </div>
        <div className='mt-20 ml-10 text-lg'>I’m JAY,<br />A designer, developer <br />and a creator.</div>
      </div>
      <div className='ml-28 mr-28 pt-5'>
        <div className='font-kohoSemibold text-2xl'>ABOUT ME</div>
        <div className='font-kohoRegular text-md pt-4 pb-8'>From the start, I’ve always been a creative person who wishes to excel in every aspect of my life. I started out as a developer and picked up designing on the way. I’m also a part-time musician making my own catalogue and a fitness enthusiast. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</div>
      </div>
      <div className='text-center pb-6'>----------x----------x----------x----------x----------x----------</div>
    </div>
  )
}

export default About
