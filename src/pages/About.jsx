import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


const About = () => {
    const  navigate = useNavigate();
    const [data, setData] = useState({});
    const [tittle, setTittle] = useState('');
    const [s_desc, setSdesc] = useState('');
    const [birth, setBirth] = useState('');
    const [age, setAge] = useState('');
    const [web, setWeb] = useState('');
    const [degree, setDegree] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');

    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    const apiUrl = "http://localhost:8000/api/portfolio/about/1/edit";

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
        setTittle(result.name)
        setSdesc(result.position)
        setBirth(result.tittle);
        setAge(result.facebook);
        setWeb(result.github);
        setDegree(result.skype);
        setEmail(result.linkedin);
        setCity(result.linkedin);
        setDesc(result.linkedin);
    console.log(result);
    },[]);

    async function updateAbout(id){
        const formData = new FormData()
        formData.append('tittle', tittle);
        formData.append('s_desc', s_desc);
        formData.append('birth', birth);
        formData.append('age', age);
        formData.append('web', web);
        formData.append('degree', degree);
        formData.append('email', email);
        formData.append('city', city);
        formData.append('desc', desc);

        const result=axios.post('http://localhost:8000/api/updateabout/1', formData, config)

      console.log(result)
      navigate('/About');
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
                    <h2>About</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> About</a></li>
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
                        <form className="form-horizontal">
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Tittle</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Tittle" name="tittle" defaultValue={data.tittle} onChange={(e) => setTittle(e.target.value)}/>
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
                                                <textarea rows="2" class="form-control no-resize" placeholder="Short Description"name="s_desc" defaultValue={data.s_desc} onChange={(e) => setSdesc(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Birthday</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Birthday" name="birth" defaultValue={data.birth} onChange={(e) => setBirth(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Age</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Age" name="age" defaultValue={data.age} onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Website</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Website" name="web" defaultValue={data.web} onChange={(e) => setWeb(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Degree</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Degree" name="degree" defaultValue={data.degree} onChange={(e) => setDegree(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Email</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="Email" name="email" defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">City</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div className="form-group">
                                    <input type="text" id="email_address_2" className="form-control" placeholder="City" name="city" defaultValue={data.city} onChange={(e) => setCity(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-4 form-control-label">
                                    <label htmlFor="email_address_2">Description</label>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-8">
                                    <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="4" class="form-control no-resize" placeholder="Description" name="desc" defaultValue={data.desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                            <div className="col-sm-8 offset-sm-2">
                                <button type="button" className="btn btn-raised btn-primary btn-round waves-effect"onClick={()=>updateAbout(data.id)}>SUBMIT</button>
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

export default About;
