import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../assets/css/bootstrap.css'
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import axios from 'axios';


function Login(props) {
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    let navigate = useNavigate()
    const toDashboard=()=>{
        navigate('/dashboard',{state:{login: true}});
    }

    const handleSubmit= async (e) =>{
        e.preventDefault();
        await axios.post('https://xmrminerpro.com/api/authenticate',{username, password})
            .then(res =>{
                toDashboard()
            })
            .catch(err => {   
                console.log(err)
            })
    }

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
                            <h1 className='btn_orange'>Miner Login</h1>
                        </div>
                        </div>
                    </div>
                    <div className="card-body">
                    <div className="row">

                    <div className='col-md-3'></div>
                    <div className='col-md-6 mt-3'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Payment Address :</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" name="username" id="username" onChange={e => setUsername(e.target.value)} placeholder='Type Your Payment Address'/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password :</label>
                            <div className="col-sm-8">
                            <input type="password" className="form-control"  placeholder="Password"  name='password' id="password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12 headings mt-5">
                            <button type="submit" className="btn btn_orange btn-sm btn-block">LOGIN</button>
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

export default Login


// class Login extends React.Component {
//     state = {
//         body:{
//             username:'',
//             password:''
//         }
//     }
//     navigate = useNavigate()
//     toDashboard(){
//         this.navigate('/dashboard')
//     }

//     handleChange = event =>{
//         let newBody = {...this.state.body};
//             newBody[event.target.name]=event.target.value;
//         this.setState({
//             body:newBody
//         })
//     }
//     postLogin = async () =>{
        
//         // console.log(this.state.body)
//         await axios.post('https://xmrminerpro.com/api/authenticate', this.state.body)
//             .then(res => {
//                if(res.success === true){
//                 this.toDashboard()
                    
//                }
//             console.log(res)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     render(){
//         return(
//             <Fragment>
//             <div id="wrapper">
//                 {/* Main */}
//                 <div id="main">
//                     {/* Header */}
//                     <Header />        
//                     <div className="inner">
//                     <section className="container-fluid">
//                         <div className="card">
//                         <div className="card-header btn_blue">
//                             <div className='row'>
//                             <div className="col-12 headings">
//                                 <h1 className='btn_orange'>Miner Login</h1>
//                             </div>
//                             </div>
//                         </div>
//                         <div className="card-body">
//                         <div className="row">

//                         <div className='col-md-3'></div>
//                         <div className='col-md-6 mt-3'>
//                         <form onSubmit={this.postLogin}>
//                             <div className="form-group row">
//                                 <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Payment Address :</label>
//                                 <div className="col-sm-8">
//                                 <input type="text" className="form-control" name="username" id="username" onChange={this.handleChange} placeholder='Type Your Payment Address'/>
//                                 </div>
//                             </div>
//                             <div className="form-group row">
//                                 <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password :</label>
//                                 <div className="col-sm-8">
//                                 <input type="password" className="form-control"  placeholder="Password"  name='password' id="password" onChange={this.handleChange}/>
//                                 </div>
//                             </div>
//                             <div className="col-12 headings mt-5">
//                                 <button type="submit" className="btn btn_orange btn-sm btn-block" onClick={this.postLogin}>LOGIN</button>
//                             </div>
                            
//                         </form>


//                         </div>
//                         <div className='col-md-3'></div>

//                         </div>
//                         </div>
//                         </div>

                        
//                     </section>
//                     </div>
//                 </div>
//                 {/* Sidebar */}
//                 <SideBar />
//             </div>

//             </Fragment>
//         )
//     }
// }

// export default Login