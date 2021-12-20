import React from 'react'
import { logo } from '../assets';


class Header extends React.Component {
    render(){
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
}

export default Header
