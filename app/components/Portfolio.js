import React, { Component } from "react";
import { Link } from "react-router";
import apiHelper from "../apiHelper/apiHelper.js"; 
// import { instanceOf } from 'prop-types';
// import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import Info from "./children/Info.js"
import AccountInfo from "./children/AccountInfo.js"



class Portfolio extends Component {

// static propTypes = {
//     cookies: instanceOf(Cookies).isRequired
//   }; 


  constructor() {


    super();
    
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
      cash: 0,
      stocks: [{stockName: "APPL", shareCount: 33},{stockName: "GOOG", shareCount: 20}, {stockName: "MMM", shareCount: 10} ]
    };
  
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() { 
    // console.log(req.cookies);
    this.getInfo();
  //   const { cookies } = this.props;
  //   this.state = {
  //     name: cookies.getAll()
  //   }
  //   console.log(this.state.name);
  // } 
}
  getInfo() {
    apiHelper.getInfo().then((res) =>{
      // console.log(res);
      // console.log(res.data.firstName)
      this.setState({ firstName: res.data.firstName,
                      lastName: res.data.lastName,
                      age: res.data.age,
                      grade: res.data.grade})
    });
  }

  render() {
    return (
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div classNameName="col-md-6">
    //       <br/>
    //       <br/>
    //       <br/>
    //       <h1> USER PROFILE </h1>
    //       <Info first={this.state.firstName} last={this.state.lastName} age={this.state.age} grade={this.state.grade}/>
    //     </div>
    //     <div classNameName="col-md-6">
    //       <br/>
    //       <br/>
    //       <br/>
    //     <h1> Stocks that you own </h1>
    //       <div classNameName = "panel panel-default">
    //         <div classNameName="panel-heading">
    //         <h3 classNameName="panel-title text-center">Stocks you own</h3>
    //         </div>
    //         <AccountInfo stocks={this.state.stocks}/>
    //       </div>
    //     </div>  
    //  </div>
    // </div>

    <div className="row" >
    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading dark-blue">
                                    <i className="fa fa-user-circle-o fa-5x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content dark-blue">
                                <div className="circle-tile-description text-faded" id = "userNameAndInformation">
                                    LastName:
                                    <br />{this.state.lastName}
                                    <br />
                                    firstName:                           
                                </div>
                                <div className="circle-tile-number text-faded">
                                    {this.state.firstName}
                              
                                    <span id="sparklineA"></span>
                                </div>
                                <a href="#" className="circle-tile-footer">More Info <i className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>        
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading orange">
                                    <i className="fa fa-bell fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content orange">
                                <div className="circle-tile-description text-faded">
                                    Age:<br />
                                    {this.state.age}
                                    <br />
                                </div>
                                <div className="circle-tile-number text-faded">
                                    Grade:<br />
                                    {this.state.grade}
                                    <br />
                                </div>
                                <a href="#" className="circle-tile-footer">More Info <i className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading blue">
                                    <i className="fa fa-tasks fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content blue">
                                <div className="circle-tile-description text-faded">
                                    Stocks Numbers:
                                </div>
                                <div className="circle-tile-number text-faded">
                                    10
                                    <span id="sparklineB"></span>
                                </div>
                                <a href="#" className="circle-tile-footer">More Info <i className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                   
                     <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading green">
                                    <i className="fa fa-money fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content green">
                                <div className="circle-tile-description text-faded">
                                    Revenue
                                </div>
                                <div className="circle-tile-number text-faded">
                                    $32,384
                                </div>
                                <a href="#" className="circle-tile-footer">More Info <i className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <nr />
                    <AccountInfo stocks={this.state.stocks}/>
      </div>

    
    );
  }
}

export default Portfolio;
