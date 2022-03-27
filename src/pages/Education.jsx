import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
const Education = () => {
    const [data, setData] = useState([]);
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [school, setSchool] = useState('');
    const [s_desc, setDescription] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

  useEffect(async () => {
      function getData(){
        axios.get("http://localhost:8000/api/geteducation")
        .then(function(response) {
            console.log(response.data);
            setData(response.data);

        })
        .catch(function(error) {
            console.log(error);
        });
      }
      getData();
    }, []);
    const getData = async () => {
        axios.get(`http://localhost:8000/api/geteducation`)
            .then((getData) => {
                setData(getData.data);
            })
    }
    const token =  userInfo.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    async function addData() {
        console.warn(degree, year,school, s_desc)

        const formData = new FormData()
        formData.append('degree', degree);
        formData.append('year', year);
        formData.append('school', school);
        formData.append('s_desc', s_desc);

        const result = await fetch('http://localhost:8000/api/portfolio/education', {
            method: 'POST',
            body: formData,
            headers: { Authorization: `Bearer ${token}` }
        });
        // const result=axios.post('http://localhost:8000/api/model', formData)

        console.table(result)
        // alert("Data hasbeen added")
        // history.push("/");
        setDegree('');
        setYear('');
        setSchool('');
        setDescription('');

        getData();
    }
    console.log(data);
//   const showbyId = (id) =>{
//     console.log(id);
//     // history.push("/edit/"+id);
//   }

    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Education</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Education</a></li>
                    </ul>
                    {/* <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button> */}
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
                                    <label htmlFor="email_address_2">Degree</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" name="degree"  value={degree} onChange={(e)=>setDegree(e.target.value)} placeholder="Degree" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Year Range</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" name="year"  value={year} onChange={(e)=>setYear(e.target.value)} placeholder="Year Range" />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">School</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" name="school"  value={school} onChange={(e)=>setSchool(e.target.value)} placeholder="School" />
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description" name="s_desc" value={s_desc} onChange={(e)=>setDescription(e.target.value)} ></textarea>
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
                                <th>Degree</th>
                                <th>Institute</th>
                                <th>Year</th>
                                <th>Action</th>
                                </tr>
                            </thead>

                                <tbody>
                                {data.map((item) => (
                                    <tr>
                                    <td>{item.id}</td>
                                    <td>{item.degree}</td>
                                    <td>{item.school}</td>
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

export default Education;
