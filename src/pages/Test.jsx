import React from 'react'

const Test = () => {
    return (
        <>
            {/* Main Content */}
            <section className="content">
                <div className>
                <div className="block-header">
                    <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>Dashboard</h2>
                        <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Dashboard</a></li>
                        <li className="breadcrumb-item active">Dashboard 1</li>
                        </ul>
                        {/* <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button> */}
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card widget_2 big_icon traffic">
                        <div className="body">
                            <h6>Traffic</h6>
                            <h2>20 <small className="info">of 1Tb</small></h2>
                            <small>2% higher than last month</small>
                            <div className="progress">
                            <div className="progress-bar l-amber" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card widget_2 big_icon sales">
                        <div className="body">
                            <h6>Sales</h6>
                            <h2>12% <small className="info">of 100</small></h2>
                            <small>6% higher than last month</small>
                            <div className="progress">
                            <div className="progress-bar l-blue" role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} style={{width: '38%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card widget_2 big_icon email">
                        <div className="body">
                            <h6>Email</h6>
                            <h2>39 <small className="info">of 100</small></h2>
                            <small>Total Registered email</small>
                            <div className="progress">
                            <div className="progress-bar l-purple" role="progressbar" aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} style={{width: '39%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card widget_2 big_icon domains">
                        <div className="body">
                            <h6>Domains</h6>
                            <h2>8 <small className="info">of 10</small></h2>
                            <small>Total Registered Domain</small>
                            <div className="progress">
                            <div className="progress-bar l-green" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{width: '89%'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>


        </>
    )
}

export default Test
