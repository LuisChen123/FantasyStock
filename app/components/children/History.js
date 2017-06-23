import React, {Component} from "react";

class History extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table id="tableReport" className="table table-hover ">
                        <tbody>
                            <tr className="media" id="carga_30" data-id="30">
                                <td className="media-left">
                                    <h2>30</h2>
                                </td>
                                <td className="media-body">
                                    <h4 className="media-heading font-yellow text-bold hidden-xs">asdA</h4>
                                    <h4
                                        className="media-heading font-yellow text-bold hidden-sm hidden-md hidden-lg hidden-xl">asd asd</h4>
                                    <span>
                                        <strong>Status:</strong>
                                        <span className="label label-info">asd</span>
                                    </span>
                                    <span>
                                        <strong>asd:</strong>
                                        asd</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        asd asd</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        $ 9.450,00</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        2.asd asd</span>
                                    <span className="hidden-xs">
                                        <strong>Cubage:</strong>
                                        3 asd</span>
                                </td>
                            </tr>
                           
                            <tr className="media" id="carga_10" data-id="10">
                                <td className="media-left">
                                    <h2>10</h2>
                                </td>
                                <td className="media-body">
                                    <h4 className="media-heading font-yellow text-bold hidden-xs">asd asd asd</h4>
                                    <h4
                                        className="media-heading font-yellow text-bold hidden-sm hidden-md hidden-lg hidden-xl">asd asd</h4>
                                    <span>
                                        <strong>Status:</strong>
                                        <span className="label label-info">asd</span>
                                    </span>
                                    <span>
                                        <strong>asd:</strong>
                                        asd</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        asd asd</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        R$ 9.450,00</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        2.400 KG</span>
                                    <span className="hidden-xs">
                                        <strong>asd:</strong>
                                        3 asd</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default History;