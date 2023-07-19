import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLogo from '../../public/logo.png'

const Header = () => {
  return (
    // <div className="navWrapper">
    //   <div className="navContainer">
    //     {/* <Link href="http://localhost:3000/">
    //       <div className="logoWrapper">
    //         <div className="logoImage Wrapper">
    //           <Image  width="30" height="30" src="/images/logo.png" alt="" />
    //         </div>
    //         <span className="logo1">Developers</span>
    //         <span className="logo2">Hub</span>
    //       </div>
    //     </Link> */}
        

<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer' 
            />
          </a>
        </Link>
        <div>

        
        <div className="btnsWrapper">
          <Link href="/employeer/jobs/new">
            <button className="postAJobButton">
              <span>Post Link Job</span>
            </button>
          </Link>

          <Link href="/login">
            <button className="loginButtonHeader">
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header