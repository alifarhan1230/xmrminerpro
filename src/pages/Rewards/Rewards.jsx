import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import '../../assets/css/bootstrap.css'
import '../../assets/css/templatemo-style.css';
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
                            <div className="col-12 headings">
                                <h1>Rewards</h1>
                            </div>
                            <p /><h6><img src="assets\images\voucher\amazon.jpg" alt="Amazon Voucher" title="Amazon Voucher" />
                                <br />1000000 points</h6><p />
                            <h6><img src="assets\images\voucher\steam.jpg" alt="Steam Voucher" title="Steam Voucher" /><br />
                                <br />1000000 points</h6>
                            <img src="assets\images\voucher\overstock.jpg" alt="Overstock Voucher" title="Overstock Voucher" /><br />
                            1000000 points
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
