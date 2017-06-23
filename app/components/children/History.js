import React, {Component} from "react";

class History extends Component {
    constructor() {
        super();
    }
    // Date:"2017-06-23T04:42:36.839Z"
// numberOfSharesPurchased : 5
// numberOfSharesSold:0
// sharePrice :145.63
// stockName:"AAPL"

    render() {  
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table id="tableReport" className="table table-hover ">
                        <tbody>
                         {this.props.tradeHistory.map((item, i)=> {  
                             return(
                                 <tr className="media" id="carga_30" data-id="30">
                                <td className="media-left">
                                    <h2 key ={i}>{i + 1}</h2>
                                </td>
                                <td className="media-body">
                                    <h4 className="media-heading font-yellow text-bold hidden-xs">{item.stockName}</h4>
                                    <h4
                                        className="media-heading font-yellow text-bold hidden-sm hidden-md hidden-lg hidden-xl">asd asd</h4>
                                    <span>
                                        <strong>SharePrice: </strong>
                                        <span className="label label-info">{item.sharePrice}</span>
                                    </span>
                                    <br/>
                                    <span>
                                        <strong>Numeber of Shares Purchased: </strong>
                                        {item.numberOfSharesPurchased}</span>
                                        <br/>
                                    <span className="hidden-xs">
                                        <strong>Number of Shares Sold: </strong>
                                        {item.numberOfSharesSold}</span>
                                        <br/>
                                    <span className="hidden-xs">
                                        <strong>Date of Transaction: </strong>
                                        {item.Date}</span>
                                </td>
                            </tr>
                             )
                         })}
      
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default History;