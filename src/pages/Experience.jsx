import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Experience = () => {
    const [data, setData] = useState([]);
    const [position, setPosition] = useState('');
    const [year, setYear] = useState('');
    const [company, setCompany] = useState('');
    const [s_desc1, setDescription1] = useState('');
    const [s_desc2, setDescription2] = useState('');
    const [s_desc3, setDescription3] = useState('');
    const [s_desc4, setDescription4] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    useEffect(async () => {
      await axios.get("http://localhost:8000/api/getexperience")
      .then(function(response) {
          console.log(response.data);
          setData(response.data);

      })
      .catch(function(error) {
          console.log(error);
      });
      }, []);
      const getData = async () => {
        axios.get(`http://localhost:8000/api/getexperience`)
            .then((getData) => {
                setData(getData.data);
            })
    }
    const token =  userInfo.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function addData() {
        // console.warn(degree, year,school, s_desc)

        const formData = new FormData()
        formData.append('position', position);
        formData.append('year', year);
        formData.append('company', company);
        formData.append('s_desc1', s_desc1);
        formData.append('s_desc2', s_desc2);
        formData.append('s_desc3', s_desc3);
        formData.append('s_desc4', s_desc4);

        const result = await fetch('http://localhost:8000/api/portfolio/experience', {
            method: 'POST',
            body: formData,
            headers: { Authorization: `Bearer ${token}` }
        });
        // const result=axios.post('http://localhost:8000/api/model', formData)

        console.table(result)
        // alert("Data hasbeen added")
        // history.push("/");
        setPosition('');
        setYear('');
        setCompany('');
        setDescription1('');
        setDescription2('');
        setDescription3('');
        setDescription4('');

        getData();
    }
    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Experience</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Experience</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                    </div>
                </div>
                </div>
                <div className="container-fluid">

                {/* Horizontal Layout */}
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                        <form className="form-horizontal">
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Position</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Position" name="position" value={position} onChange={(e)=>setPosition(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Year</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Year" name="year" value={year} onChange={(e)=>setYear(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Company</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Company" name="company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Short Description First</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc1" value={s_desc1} onChange={(e)=>setDescription1(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Short Description Second</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc2" value={s_desc2} onChange={(e)=>setDescription2(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Short Description Third</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc3" value={s_desc3} onChange={(e)=>setDescription3(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Short Description Fourth</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc4" value={s_desc4} onChange={(e)=>setDescription4(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-sm-8 offset-sm-2">
                                <button type="button" className="btn btn-raised btn-primary btn-round waves-effect" onClick = { addData}>SUBMIT</button>
                            </div>
                            </div>
                        </form>
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
                                <th>Position</th>
                                <th>Company</th>
                                <th>Year</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                                <tbody>
                            {data.map((item) => (

                                    <tr>
                                    <td>{item.id}</td>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>{item.year}</td>
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
            </div>
            </section>

        </>
    )
}

export default Experience;
