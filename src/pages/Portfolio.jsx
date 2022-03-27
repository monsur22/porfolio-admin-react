import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';


const Portfolio = () => {
    const [data, setData] = useState([]);
    const [tittle, setTittle] = useState('');
    const [overview, setOverview] = useState('');
    const [technology, setTechnology] = useState('');
    const [part_name, setPart_name] = useState('');
    const [your_role, setRole] = useState('');
    const [s_desc, setDescription] = useState('');
    const [image, setImage] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    useEffect(async () => {
      await axios.get("http://localhost:8000/api/getportfolio")
      .then(function(response) {
          console.log(response.data);
          setData(response.data);

      })
      .catch(function(error) {
          console.log(error);
      });
      }, []);

      const getData = async () => {
        axios.get(`http://localhost:8000/api/getportfolio`)
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
        formData.append('tittle', tittle);
        formData.append('overview', overview);
        formData.append('technology', technology);
        formData.append('part_name', part_name);
        formData.append('your_role', your_role);
        formData.append('s_desc', s_desc);
        formData.append('image', image);


        const result = await fetch('http://localhost:8000/api/portfolio/portf', {
            method: 'POST',
            body: formData,
            headers: { Authorization: `Bearer ${token}` }
        });
        // const result=axios.post('http://localhost:8000/api/model', formData)

        console.table(result)
        // alert("Data hasbeen added")
        // history.push("/");
        setTittle('');
        setOverview('');
        setTechnology('');
        setPart_name('');
        setRole('');
        setDescription('');
        setImage('');

        getData();
    }
    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Portfolio</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Portfolio</a></li>
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
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Tittle" name="tittle"  value={tittle} onChange={(e)=>setTittle(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">overview</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Overview"name="overview"  value={overview} onChange={(e)=>setOverview(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Technology</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Technology"name="technology"  value={technology} onChange={(e)=>setTechnology(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Part  Name</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Part Name"name="part_name"  value={part_name} onChange={(e)=>setPart_name(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Role</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Role" name="your_role"  value={your_role} onChange={(e)=>setRole(e.target.value)} />
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc"  value={s_desc} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                                            </div>
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Image"name="image"  value={image} onChange={(e)=>setImage(e.target.value)} ></textarea>
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
                                <th>Overview</th>
                                <th>Technology</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>ID</th>
                                <th>Overview</th>
                                <th>Technology</th>
                                <th>Action</th>
                                </tr>
                            </tfoot>

                            <tbody>
                            {data.map((item) => (
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.overview}</td>
                                <td>{item.technology}</td>
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

export default Portfolio;
