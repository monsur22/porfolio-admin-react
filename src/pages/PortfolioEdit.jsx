import React, { useEffect, useState  } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link , useNavigate, useParams} from 'react-router-dom';


const EducationEdit = (props) => {
    const [data, setData] = useState({});
    const [tittle, setTittle] = useState('');
    const [overview, setOverview] = useState('');
    const [technology, setTechnology] = useState('');
    const [part_name, setPart_name] = useState('');
    const [your_role, setRole] = useState('');
    const [s_desc, setDescription] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    let navigate = useNavigate();

    const apiUrl = "http://localhost:8000/api/portfolio/portf/" + id +"/edit";
    console.warn("props",id)

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    const token =  userInfo.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(async () => {
        let result = await fetch(apiUrl,config)
        result = await result.json();
        setData(result);
        console.log(result);
        setTittle(result.tittle)
        setOverview(result.overview)
        setTechnology(result.technology)
        setPart_name(result.part_name)
        setRole(result.your_role)
        setDescription(result.s_desc)
        setImage(result.image)

    },[]);
    const getData = async () => {
        axios.get(`http://localhost:8000/api/getportfolio`)
            .then((getData) => {
                setData(getData.data);
            })
    }



    async function updateData(id) {

        const formData = new FormData()
        formData.append('tittle', tittle);
        formData.append('overview', overview);
        formData.append('technology', technology);
        formData.append('part_name', part_name);
        formData.append('your_role', your_role);
        formData.append('s_desc', s_desc);
        formData.append('image', image);


        const result=axios.post('http://localhost:8000/api/updatePortfolio/'+ id, formData, config)

        console.log(id);
        console.table(result)

        navigate('/Portfolio');
        getData();
    }
    console.log(data);



    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Education</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Portfolio</a></li>
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
                                    <label htmlFor="email_address_2">Tittle</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Tittle" name="tittle"  defaultValue={data.tittle} onChange={(e)=>setTittle(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">overview</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Overview"name="overview"  defaultValue={data.overview} onChange={(e)=>setOverview(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Technology</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Technology"name="technology"  defaultValue={data.technology} onChange={(e)=>setTechnology(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Part  Name</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Part Name"name="part_name"  defaultValue={data.part_name} onChange={(e)=>setPart_name(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Role</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Role" name="your_role"  defaultValue={data.your_role} onChange={(e)=>setRole(e.target.value)} />
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc"  defaultValue={data.s_desc} onChange={(e)=>setDescription(e.target.value)} ></textarea>
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Image"name="image"  defaultValue={data.image} onChange={(e)=>setImage(e.target.value)} ></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-sm-8 offset-sm-2">
                                <button type="button" className="btn btn-raised btn-primary btn-round waves-effect" onClick={()=>updateData(data.id)}>SUBMIT</button>
                            </div>
                            </div>
                        </form>
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

export default EducationEdit;
