import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

const Home = () => {
    const  navigate = useNavigate();
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [skype, setSkype] = useState('');
    const [github, setGithub] = useState('');
    const [facebook, setFacebook] = useState('');
    const [tittle, setTitle] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    const apiUrl = "http://localhost:8000/api/portfolio/home/1/edit";

    useEffect(() => {
        if (!userInfo){
            navigate('/singin', {replace: true});
        }
    }, [ userInfo])

    const token =  userInfo.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log("config",token)



    useEffect(async () => {
        let result = await fetch(apiUrl,config)
        result = await result.json();
        setData(result);
        console.log(result);
        setName(result.name)
        setPosition(result.position)
        setTitle(result.tittle);
        setFacebook(result.facebook);
        setGithub(result.github);
        setSkype(result.skype);
        setLinkedin(result.linkedin);
    console.log(result);
    },[]);

    async function updateHome(id){
        const formData = new FormData()
        formData.append('name', name);
        formData.append('position', position);
        formData.append('tittle', tittle);
        formData.append('facebook', facebook);
        formData.append('github', github);
        formData.append('skype', skype);
        formData.append('linkedin', linkedin);

        const result=axios.post('http://localhost:8000/api/updatehome/1', formData, config)

      console.log(result)
      navigate('/Home');
      // alert("Data hasbeen updated")
      // getData()
    //   history.push("/");
    }
    return (
        <>
            <section className="content">
            <div className="body_scroll">
                <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Home</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Home</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                    </div>
                </div>
                </div>
                <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Name</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Name"  name="name" defaultValue={data.name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Position</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Position" name="position" defaultValue={data.position} onChange={(e) => setPosition(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Tittle</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Tittle" name="tittle" defaultValue={data.tittle} onChange={(e) => setTitle(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Facebook</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Facebook" name="facebook" defaultValue={data.facebook} onChange={(e) => setFacebook(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Github</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Github" name="github" defaultValue={data.github} onChange={(e) => setGithub(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Skype</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Skype" name="skype" defaultValue={data.skype} onChange={(e) => setSkype(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">LinkedIn</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="LinkedIn" name="linkedin" defaultValue={data.linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-sm-8 offset-sm-2">
                                <button type="button" className="btn btn-raised btn-primary btn-round waves-effect" onClick={()=>updateHome(data.id)} >SUBMIT</button>
                            </div>
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

export default Home
