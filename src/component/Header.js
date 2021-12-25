import React, {useState, useEffect } from 'react'
import { logo } from '../assets';
import { useNavigate } from "react-router-dom";


function Header (props) {

  const [isLogin, setLogin]  = useState()
  useEffect(() => {
      const loginUser = localStorage.getItem("user")
      if(loginUser){
          const foundUser = JSON.parse(loginUser);
          setLogin(foundUser.data.success)
      }
  }, [])
  
  let navigate = useNavigate()

  const toHome=()=>{
      navigate('/',{state:{data: true}});
  }

  const logOut = () => {
    localStorage.clear();
    toHome();
  }
  if(isLogin === true){
    return (
      <div>
          <div className="container-fluid top_stats hide_hashrates">
        <div className="row">                 
          <div className="col-md-8 col-sm-12">
            <span>Network: </span>
            <span>Pool: </span>
            <span>You: </span>
            <span>XMR: </span>
          </div>  
          <div className="col-md-4 col-sm-12">
            <a href="/getting-started" className="btn_blue">Getting Started</a> 

            <a href="#" className="btn_orange" onClick={logOut} >Logout</a>
          </div> 
        </div> 
    </div>

    <div className="container-fluid top_stats show_hashrates">
      <div className="row">                     
          <div className="col-sm-6">
            <div className="logo">
              <a href="/"> <img src={logo} alt="img"/></a>
            </div>
          </div>  
          <div className="col-sm-5">
            <a href="getting-started.html" className="btn_blue">Getting Started</a> 
            <a href="/login" className="btn_orange">Login</a></div> 
          </div> 
      </div>
      </div>
  )

  }
        return (
            <div>
                <div className="container-fluid top_stats hide_hashrates">
              <div className="row">                 
                <div className="col-md-8 col-sm-12">
                  <span>Network: </span>
                  <span>Pool: </span>
                  <span>You: </span>
                  <span>XMR: </span>
                </div>  
                <div className="col-md-4 col-sm-12">
                  <a href="/getting-started" className="btn_blue">Getting Started</a> 

                  <a href="/login" className="btn_orange" >Login</a>
                </div> 
              </div> 
          </div>

          <div className="container-fluid top_stats show_hashrates">
            <div className="row">                     
                <div className="col-sm-6">
                  <div className="logo">
                    <a href="/"> <img src={logo} alt="img"/></a>
                  </div>
                </div>  
                <div className="col-sm-5">
                  <a href="getting-started.html" className="btn_blue">Getting Started</a> 
                  <a href="/login" className="btn_orange">Login</a></div> 
                </div> 
            </div>
            </div>
        )
}

export default Header
