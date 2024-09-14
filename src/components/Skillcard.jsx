import React from 'react'

const Skillcard = () => {
  return (
    <div className='bg-black text-white pb-6'>
      <div className='flex items-center ml-28 justify-around mr-28 pt-8 text-center'>
        <div className='font-kohoBold text-xl'>DESIGNER
            <div className='mr-2 text-xxs font-kohoRegular text-center leading-4'>I value simple content structure, clean design patterns, and thoughtful interactions.</div>
            <div className='text-sm font-kohoSemibold text-center pt-5'>THINGS I ENJOY</div>
            <div className='text-xxs font-kohoRegular text-center'>UX, UI, Web, Logos</div>
            <div className='text-sm font-kohoSemibold text-center pt-8'>DESIGN TOOLS</div>
            <div className='text-xxs font-kohoRegular text-center leading-4'>FIGMA <br /> PEN & PAPER <br /> SKETCH</div>
        </div>
        <div className='font-kohoBold text-xl'>DEVELOPER
        <div className='mx-2 text-xxs font-kohoRegular text-center leading-4'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</div>
        <div className='text-sm font-kohoSemibold text-center pt-5'>LANGUAGES I SPEAK</div>
        <div className='text-xxs font-kohoRegular text-center leading-4'>HTML, CSS, JS, REACT, C++, PYTHON, GIT</div>
        <div className='text-sm font-kohoSemibold text-center pt-8'>DEV TOOLS</div>
        <div className='text-xxs font-kohoRegular text-center leading-4'>VS CODE <br /> GITHUB <br /> MERN</div>
        </div>
        <div className='font-kohoBold text-xl'>CREATOR
        <div className='ml-2 text-xxs font-kohoRegular text-center leading-4'>I love creating music and fitness content showcasing my creativity, journey, growth and my love for art.</div>
        <div className='text-sm font-kohoSemibold text-center pt-5'>EXTRA SKILLS</div>
        <div className='text-xxs font-kohoRegular text-center leading-4'>Video Editing, Music, Cinematography, Fitness</div>
        <div className='text-sm font-kohoSemibold text-center pt-8'>PLATFORM’S USED</div>
        <div className='text-xxs font-kohoRegular text-center leading-4'>INSTAGRAM<br /> YOUTUBE <br />X </div>
        </div>
      </div>
      <div className='text-center mt-8'>----------x----------x----------x----------x----------x----------</div>
    </div>
  )
}

export default Skillcard
