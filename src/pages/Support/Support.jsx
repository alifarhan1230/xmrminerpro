import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import '../../assets/css/bootstrap.css'
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header'
import SideBar from '../../component/SideBar';


class Support extends React.Component {
    render(){
        return(
            <Fragment>
           <div id="wrapper">
                {/* Main */}
                <div id="main">
                    {/* Header */}
                    <Header />
                    {/* Banner */}
                    <section className="main-banner">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-12">
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body">
                            <h1 className='text-center mt-5'>coming soon</h1>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                {/* Sidebar */}
                 <SideBar />
            </div>

            </Fragment>
        )
    }
}

export default Support
