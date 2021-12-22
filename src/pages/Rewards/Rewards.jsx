import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import '../../assets/css/bootstrap.css'
import '../../assets/css/templatemo-style.css';
import '../Rewards/Rewards.css'
import Header from '../../component/Header'
import SideBar from '../../component/SideBar';

class Rewards extends React.Component {
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
                            <div className="row">
                            <div className="col-12 headings mg-5">
                                <h1>Rewards</h1>
                            </div>
                            <div className="divider"></div>
                            <div className='row mt-5'>
                                <div className='col-md-4'>
                                <div className="card ml-5">
                                <div class="card-header text-center bg-warning">
                                    Amazon
                                </div>
                                <img className="card-img-top" src="assets\images\voucher\amazon.jpg" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">1000000 points</h5>
                                    <hr/>
                                    <a href="#" className="btn btn-primary ">Redeem Point</a>
                                </div>
                                </div>

                                </div>

                                <div className='col-md-4'>
                                <div className="card ml-5">
                                <div class="card-header text-center bg-dark text-white">
                                    Steam
                                </div>
                                <img className="card-img-top" src="assets\images\voucher\steam.jpg" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">1000000 points</h5>
                                    <a href="#" className="btn btn-primary">Redeem Point</a>
                                </div>
                                </div>

                                </div>

                                <div className='col-md-4'>
                                <div className="card ml-5">
                                <div class="card-header text-center bg-danger text-white">
                                    Overstock
                                </div>
                                <img className="card-img-top" src="assets\images\voucher\overstock.jpg" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">1000000 points</h5>
                                    <a href="#" className="btn btn-primary">Redeem Point</a>
                                </div>
                                </div>

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

export default Rewards
