import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../../context/AuthContext";
import NavLogo from '../../public/logo4.png'


const Header = ()=>{

    const { loading, user, logout } = useContext(AuthContext);

    const logoutHandler = () => {
      logout();
    };


    return (
      <div className="navWrapper">
    <div className="navContainer">
      <Link href="/" legacyBehavior>
        <div className="logoWrapper">
          <div className="logoImgWrapper ">
            {/* <Image width="50" height="30" src="/images/logo.svg" alt=""/> */}
          </div>
          {/* <span className="logo1">Developers Hub</span> */}
          {/* <span className="logo2">Hub</span> */}
          <Image
              
              src={NavLogo}
              alt='/'
              width='115'
              height='90'
              className='cursor-pointer'
              
   
            />
        </div>
      </Link>

      <div className="btnsWrapper">
      <Link href="/search" legacyBehavior>
        <button className="postAJobButton">
          <span>Search A Job</span>
          </button>
        </Link>

        <Link href="/employeer/jobs/new" legacyBehavior>
          <button className="postAJobButton">
            <span>Post A Job</span>
          </button>
        </Link>

          {user ? (
          <div className="dropdown ml-3">
            <a
                  className="btn dropdown-toggle mr-4"
                  id="dropDownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Hi, {user.first_name} {user.last_name}</span>{" "}
            </a>

            <div
              className="dropdown-menu"
              aria-labelledby="dropDownMenuButton"
            >
              <Link href="/employeer/jobs" legacyBehavior>
                <a className="dropdown-item">My Jobs</a>
              </Link>

              <Link href="/me/applied" legacyBehavior>
                <a className="dropdown-item">Jobs Applied</a>
              </Link>

              <Link href="/me" legacyBehavior>
                <a className="dropdown-item">Profile</a>
              </Link>

              <Link href="/upload/resume" legacyBehavior>
                <a className="dropdown-item">Upload Resume</a>
              </Link>

              <Link href="/" legacyBehavior>
                <a
                  className="dropdown-item text-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </a>
              </Link>
            </div>
          </div>
        ) : (
          !loading && (

        <Link href="/login" legacyBehavior>
              <button className="loginButtonHeader">
                <span>Login</span>
              </button>
        </Link>
          )
        )}

      </div>
    </div>
  </div>
    );
}

export default Header;
