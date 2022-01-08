import React, {useState, useEffect } from 'react'
import { logo } from '../assets';
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from 'react-bootstrap';



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
          <div className="col-md-10 col-sm-12">
            <span>Network: 1.8 KH/s</span>
            <span>Pool: 0 H/s</span>
            <span>You: 0 H/s</span>
            <span>XMR: </span>
          </div>  
          <div className="col-md-2 col-sm-12">
            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="warning">
              Logout
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">

              <Dropdown.Item href="/payment-threshold">Payment Threshold</Dropdown.Item>
              <Dropdown.Item href="/email-setting">Email Setings</Dropdown.Item>
              <Dropdown.Item href="/change-password">Change Password</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/" onClick={logOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>          
          </div> 

          
        </div> 
    </div>

    <div className="container-fluid top_stats show_hashrates">
      <div className="row">                     
          <div className="col-sm-10">
            <div className="logo">
              <a href="/"> <img src={logo} alt="img"/></a>
            </div>
          </div>  
          <div className="col-md-2 col-sm-12">
            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="warning">
              Logout
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">

              <Dropdown.Item href="/payment-threshold">Payment Threshold</Dropdown.Item>
              <Dropdown.Item href="/email-setting">Email Setings</Dropdown.Item>
              <Dropdown.Item href="/change-password">Change Password</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/" onClick={logOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>          
          </div> 
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
                <span>Network: 1.8 KH/s</span>
                <span>Pool: 0 H/s</span>
                <span>You: 0 H/s</span>
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
