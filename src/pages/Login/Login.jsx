import React, { Fragment } from 'react';
import '../../assets/css/bootstrap.css'
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';

class Login extends React.Component {
    render(){
        return(
            <Fragment>
            <div id="wrapper">
                {/* Main */}
                <div id="main">
                    {/* Header */}
                    <Header />        
                    <div className="inner">
                    <section className="container-fluid">
                        <div className="card">
                        <div className="card-header btn_blue">
                            <div className='row'>
                            <div className="col-12 headings">
                                <h1 className='btn_orange'>Login Form</h1>
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                        <div className="row">

                        <div className='col-md-3'></div>
                        <div className='col-md-6 mt-3'>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Payment Address :</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" name="email" id="email" placeholder='Type Your Payment Address'/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password :</label>
                                <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password"  name='password' id="password"/>
                                </div>
                            </div>
                            <div className="col-12 headings mt-5">
                                <button type="button" className="btn btn_orange btn-sm btn-block">LOGIN</button>
                            </div>
                            
                        </form>


                        </div>
                        <div className='col-md-3'></div>

                        </div>
                        </div>
                        </div>

                        
                    </section>
                    </div>
                </div>
                {/* Sidebar */}
                <SideBar />
            </div>

            </Fragment>
        )
    }
}

export default Login