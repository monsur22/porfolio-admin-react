import React, { useEffect, useState  } from 'react'
import axios from 'axios';

const Skill = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:8000/api/getskill")
      .then(function(response) {
          console.log(response.data);
          setData(response.data);

      })
      .catch(function(error) {
          console.log(error);
      });
      }, []);
    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Skill</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Skill</a></li>
                    </ul>
                    {/* <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button> */}
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                    </div>
                </div>
                </div>
                <div className="container-fluid">
                {/* Vertical Layout */}
                {/* <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="alert alert-warning" role="alert">
                        <strong>Bootstrap</strong> Better check yourself, <a target="_blank" href="https://getbootstrap.com/docs/4.2/components/forms/">View More</a>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i className="zmdi zmdi-close" /></span>
                        </button>
                    </div>
                    </div>
                </div> */}
                {/* Horizontal Layout */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                        <form className="form-horizontal">
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Tittle</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Tittle" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Image</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Year Range" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Short Description</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-sm-8 offset-sm-2">
                                <button type="button" className="btn btn-raised btn-primary btn-round waves-effect">SUBMIT</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>


                </div>
            </div>
            <div className="container-fluid">
                {/* Basic Examples */}
                <div className="row clearfix">
                    <div className="col-lg-12">
                    <div className="card">
                        <div className="body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Tittle</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>ID</th>
                                <th>Tittle</th>
                                <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                            {data.map((item) => (
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.tittle}</td>
                                <td>Action</td>
                                </tr>
                            ))}

                            </tbody>
                            </table>
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

export default Skill;
