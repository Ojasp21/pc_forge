import React from 'react'
import { Link } from 'react-router-dom'
import BuildButton from '../components/Button/BuildButton'
import Allcards from '../components/Cards/Allcards'


const Home = () => {
  return (
    <div className='flex-col'>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='absolute h-screen w-full bg-homepagebg inset-0 bg-cover bg-center bg-no-repeat brightness-50'
            >
            </div>
                <div className=''>
                <Link to='/build'>
                    <BuildButton></BuildButton>
                </Link>
                </div>
        </div>

        <div className='pre-builts bg-slate-400 h-screen w-full flex bg-black'>
            
        </div>

        <div className='footer bg-slate-600 h-[25rem] w-full flex bg-black'>
            
        </div>
    
    </div>
  )
}

export default Home