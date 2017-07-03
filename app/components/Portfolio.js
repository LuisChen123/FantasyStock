import React, {Component} from "react";
import {Link} from "react-router";
import apiHelper from "../apiHelper/apiHelper.js";
// import { instanceOf } from 'prop-types'; import { CookiesProvider,
// withCookies, Cookies } from 'react-cookie';
import Info from "./children/Info.js"
import AccountInfo from "./children/AccountInfo.js"
import History from "./children/History.js"

class Portfolio extends Component {

    // static propTypes = {     cookies: instanceOf(Cookies).isRequired   };
    constructor() {
        super();
        this.state = {
            objectArray: [],
            userName:"",
            firstName: "",
            lastName: "",
            age: "",
            grade: "",
            cash: 0,
            stocks: [],
            numberOfArray: 0,
            stocksHold: [],
            numberOfSharesHold: [],
            tradeHistory: []

        };

        this.getInfo = this
            .getInfo
            .bind(this);
    }

    componentDidMount() {
        // console.log(req.cookies);
        this.getInfo();
        //   const { cookies } = this.props;   this.state = {     name: cookies.getAll()
        //   }   console.log(this.state.name); }
    }
    getInfo() {
        apiHelper
            .getInfo()
            .then((res) => {
                // console.log(res); console.log(res.data.firstName)
                console.log("porfolio stuff", res);
                console.log(res.data.portfolio, "    portfolio data");
                console.log(res.data.tradeHistory, "     trade history")
                this.setState({
                    objectArray: res.data.portfolio,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    userName:res.data.username,
                    age: res.data.age,
                    grade: res.data.grade,
                    cash: res
                        .data
                        .cash
                        .toFixed(2),
                    numberOfArray: res.data.portfolio.length,
                    tradeHistory: res.data.tradeHistory

                })
            });
    }

    portfolioValueTracker(){
        // loop through this.state.stocks
        var portfolioValue = 0; 
        var stocksPortfolio = this.state.stocks; 
        stocksPortfolio.forEach((item)=>{
            portfolioValue+item.stock
        }) ; 
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading dark-blue">
                                    <i className="fa fa-user-circle-o fa-5x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content dark-blue">
                                <div className="circle-tile-description text-faded" id="userNameAndInformation">
                                    LastName:
                                    <br/>{this.state.lastName}
                                    <br/>
                                    firstName:
                                </div>
                                <div className="circle-tile-number text-faded">
                                    {this.state.firstName}

                                    <span id="sparklineA"></span>
                                </div>
                                <a href="#" className="circle-tile-footer">More Info
                                    <i className="fa fa-chevron-circle-right"></i>
                                </a>
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
                                    Age:<br/> {this.state.age}
                                    <br/>
                                </div>
                                <div className="circle-tile-number text-faded">
                                    Grade:<br/> {this.state.grade}
                                    <br/>
                                </div>
                                <a href="#" className="circle-tile-footer">More Info
                                    <i className="fa fa-chevron-circle-right"></i>
                                </a>
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
                                    {this.state.numberOfArray}
                                    <span id="sparklineB"></span>
                                </div>
                                <AccountInfo stocks={this.state.objectArray}/>
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
                                    Cash avilable
                                </div>
                                <div className="circle-tile-number text-faded">
                                    ${this.state.cash}
                                </div>
                                <a href="#" className="circle-tile-footer">More Info
                                    <i className="fa fa-chevron-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-2 col-sm-6">
                        <div className="circle-tile">
                            <a href="#">
                                <div className="circle-tile-heading purple">
                                    <i className="fa fa-comments fa-fw fa-3x"></i>
                                </div>
                            </a>
                            <div className="circle-tile-content purple">
                                <div className="circle-tile-description text-faded">
                                    UserName:
                                </div>
                                <div className="circle-tile-number text-faded">
                                    {this.state.userName}
                                    <span id="sparklineD"></span>
                                </div>
                                <a href="#" className="circle-tile-footer">More Info <i className="fa fa-chevron-circle-right"></i></a>
                            </div>
                        </div>
                </div>







                </div>

                <History tradeHistory={this.state.tradeHistory}/>
            </div>

        );
    }
}

export default Portfolio;
