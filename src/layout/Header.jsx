import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import decode from 'jwt-decode'
import {
    Nav,
    Navbar,
    Container,
    NavDropdown,

} from 'react-bootstrap'
import { logout } from '../actions/userAction'

const Header = () => {
    const dispatch = useDispatch()
    const  navigate = useNavigate();

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        // localStorage.removeItem('userInfo');
        // window.location.reload();
        dispatch(logout())

    }
    useEffect(()=>{
        const token = userInfo?.token;

        //JWT check if token expired
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp*1000 < new Date().getTime()) logoutHandler();
        }
        navigate('/', {replace: true});
    },[navigate])

    return (
        <>

            {/* Overlay For Sidebars */}
            <div className="overlay" />
            {/* Main Search */}
            <div id="search">
                <button id="close" type="button" className="close btn btn-primary btn-icon btn-icon-mini btn-round">x</button>
                <form>
                <input type="search" defaultValue placeholder="Search..." />
                <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
            {/* Right Icon menu Sidebar */}
            <div className="navbar-right">
                <ul className="navbar-nav">
                <li><a href="#search" className="main_search" title="Search..."><i className="zmdi zmdi-search" /></a></li>
                <li className="dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle" title="App" data-toggle="dropdown" role="button"><i className="zmdi zmdi-apps" /></a>
                    <ul className="dropdown-menu slideUp2">
                    <li className="header">App Sortcute</li>
                    <li className="body">
                        <ul className="menu app_sortcut list-unstyled">
                        <li>
                            <a href="image-gallery.html">
                            <div className="icon-circle mb-2 bg-blue"><i className="zmdi zmdi-camera" /></div>
                            <p className="mb-0">Photos</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle mb-2 bg-amber"><i className="zmdi zmdi-translate" /></div>
                            <p className="mb-0">Translate</p>
                            </a>
                        </li>
                        <li>
                            <a href="events.html">
                            <div className="icon-circle mb-2 bg-green"><i className="zmdi zmdi-calendar" /></div>
                            <p className="mb-0">Calendar</p>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <div className="icon-circle mb-2 bg-purple"><i className="zmdi zmdi-account-calendar" /></div>
                            <p className="mb-0">Contacts</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle mb-2 bg-red"><i className="zmdi zmdi-tag" /></div>
                            <p className="mb-0">News</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle mb-2 bg-grey"><i className="zmdi zmdi-map" /></div>
                            <p className="mb-0">Maps</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
                    <div className="notify"><span className="heartbit" /><span className="point" /></div>
                    </a>
                    <ul className="dropdown-menu slideUp2">
                    <li className="header">Notifications</li>
                    <li className="body">
                        <ul className="menu list-unstyled">
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-blue"><i className="zmdi zmdi-account" /></div>
                            <div className="menu-info">
                                <h4>8 New Members joined</h4>
                                <p><i className="zmdi zmdi-time" /> 14 mins ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-amber"><i className="zmdi zmdi-shopping-cart" /></div>
                            <div className="menu-info">
                                <h4>4 Sales made</h4>
                                <p><i className="zmdi zmdi-time" /> 22 mins ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-red"><i className="zmdi zmdi-delete" /></div>
                            <div className="menu-info">
                                <h4><b>Nancy Doe</b> Deleted account</h4>
                                <p><i className="zmdi zmdi-time" /> 3 hours ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-green"><i className="zmdi zmdi-edit" /></div>
                            <div className="menu-info">
                                <h4><b>Nancy</b> Changed name</h4>
                                <p><i className="zmdi zmdi-time" /> 2 hours ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-grey"><i className="zmdi zmdi-comment-text" /></div>
                            <div className="menu-info">
                                <h4><b>John</b> Commented your post</h4>
                                <p><i className="zmdi zmdi-time" /> 4 hours ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-purple"><i className="zmdi zmdi-refresh" /></div>
                            <div className="menu-info">
                                <h4><b>John</b> Updated status</h4>
                                <p><i className="zmdi zmdi-time" /> 3 hours ago </p>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                            <div className="icon-circle bg-light-blue"><i className="zmdi zmdi-settings" /></div>
                            <div className="menu-info">
                                <h4>Settings Updated</h4>
                                <p><i className="zmdi zmdi-time" /> Yesterday </p>
                            </div>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="footer"> <a href="javascript:void(0);">View All Notifications</a> </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
                    <div className="notify"><span className="heartbit" /><span className="point" /></div>
                    </a>
                    <ul className="dropdown-menu slideUp2">
                    <li className="header">Tasks List <small className="float-right"><a href="javascript:void(0);">View All</a></small></li>
                    <li className="body">
                        <ul className="menu tasks list-unstyled">
                        <li>
                            <div className="progress-container progress-primary">
                            <span className="progress-badge">eCommerce Website</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{width: '86%'}}>
                                <span className="progress-value">86%</span>
                                </div>
                            </div>
                            <ul className="list-unstyled team-info">
                                <li className="m-r-15"><small>Team</small></li>
                                <li>
                                <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar3.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar4.jpg" alt="Avatar" />
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <div className="progress-container">
                            <span className="progress-badge">iOS Game Dev</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                                <span className="progress-value">45%</span>
                                </div>
                            </div>
                            <ul className="list-unstyled team-info">
                                <li className="m-r-15"><small>Team</small></li>
                                <li>
                                <img src="assets/images/xs/avatar10.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar9.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar8.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar6.jpg" alt="Avatar" />
                                </li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <div className="progress-container progress-warning">
                            <span className="progress-badge">Home Development</span>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{width: '29%'}}>
                                <span className="progress-value">29%</span>
                                </div>
                            </div>
                            <ul className="list-unstyled team-info">
                                <li className="m-r-15"><small>Team</small></li>
                                <li>
                                <img src="assets/images/xs/avatar5.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                                </li>
                            </ul>
                            </div>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a href="javascript:void(0);" className="app_calendar" title="Calendar"><i className="zmdi zmdi-calendar" /></a></li>
                <li><a href="javascript:void(0);" className="app_google_drive" title="Google Drive"><i className="zmdi zmdi-google-drive" /></a></li>
                <li><a href="javascript:void(0);" className="app_group_work" title="Group Work"><i className="zmdi zmdi-group-work" /></a></li>
                <li><a href="javascript:void(0);" className="js-right-sidebar" title="Setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
                {
                userInfo ? (
                    // <a onClick={logutHandler}>Logout</a>
                    <li><a  className="mega-menu" title="Sign Out" onClick={logoutHandler}><i className="zmdi zmdi-power" /></a></li>


                    ):  <a href=""></a>
                    }
                </ul>
            </div>
            {/* Left Sidebar */}
            <aside id="leftsidebar" className="sidebar">
                <div className="navbar-brand">
                <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu" /></button>
                <a href="index.html"><img src="assets/images/logo.svg" width={25} alt="Aero" /><span className="m-l-10">Aero</span></a>
                </div>
                <div className="menu">
                <ul className="list">
                    <li>
                    <div className="user-info">
                        <a className="image" href="profile.html"><img src="assets/images/profile_av.jpg" alt="User" /></a>
                        <div className="detail">
                        <h4>Michael</h4>
                        <small>Super Admin</small>
                        </div>
                    </div>
                    </li>
                    <li className="active open"><a href="index.html"><i className="zmdi zmdi-home" /><span>Dashboard</span></a></li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps" /><span>App</span></a>
                    <ul className="ml-menu">
                        <li><a href="mail-inbox.html">Email</a></li>
                        <li><a href="chat.html">Chat Apps</a></li>
                        <li><a href="events.html">Calendar</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment" /><span>Projects</span></a>
                    <ul className="ml-menu">
                        <li><a href="project-list.html">Projects List</a></li>
                        <li><a href="taskboard.html">Taskboard</a></li>
                        <li><a href="ticket-list.html">Ticket List</a></li>
                        <li><a href="ticket-detail.html">Ticket Detail</a></li>
                    </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-folder" /><span>File Manager</span></a>
                    <ul className="ml-menu">
                        <li><a href="file-dashboard.html">All File</a></li>
                        <li><a href="file-documents.html">Documents</a></li>
                        <li><a href="file-images.html">Images</a></li>
                        <li><a href="file-media.html">Media</a></li>
                    </ul>
                    </li>
                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-blogger" /><span>Blog</span></a>
                    <ul className="ml-menu">
                        <li><a href="blog-dashboard.html">Dashboard</a></li>
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="blog-list.html">List View</a></li>
                        <li><a href="blog-grid.html">Grid View</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-shopping-cart" /><span>Ecommerce</span></a>
                    <ul className="ml-menu">
                        <li><a href="ec-dashboard.html">Dashboard</a></li>
                        <li><a href="ec-product.html">Product</a></li>
                        <li><a href="ec-product-List.html">Product List</a></li>
                        <li><a href="ec-product-detail.html">Product detail</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt" /><span>Components</span></a>
                    <ul className="ml-menu">
                        <li><a href="ui_kit.html">Aero UI KIT</a></li>
                        <li><a href="alerts.html">Alerts</a></li>
                        <li><a href="collapse.html">Collapse</a></li>
                        <li><a href="colors.html">Colors</a></li>
                        <li><a href="dialogs.html">Dialogs</a></li>
                        <li><a href="list-group.html">List Group</a></li>
                        <li><a href="media-object.html">Media Object</a></li>
                        <li><a href="modals.html">Modals</a></li>
                        <li><a href="notifications.html">Notifications</a></li>
                        <li><a href="progressbars.html">Progress Bars</a></li>
                        <li><a href="range-sliders.html">Range Sliders</a></li>
                        <li><a href="sortable-nestable.html">Sortable &amp; Nestable</a></li>
                        <li><a href="tabs.html">Tabs</a></li>
                        <li><a href="waves.html">Waves</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-flower" /><span>Font Icons</span></a>
                    <ul className="ml-menu">
                        <li><a href="icons.html">Material Icons</a></li>
                        <li><a href="icons-themify.html">Themify Icons</a></li>
                        <li><a href="icons-weather.html">Weather Icons</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment" /><span>Forms</span></a>
                    <ul className="ml-menu">
                        <li><a href="basic-form-elements.html">Basic Form</a></li>
                        <li><a href="advanced-form-elements.html">Advanced Form</a></li>
                        <li><a href="form-examples.html">Form Examples</a></li>
                        <li><a href="form-validation.html">Form Validation</a></li>
                        <li><a href="form-wizard.html">Form Wizard</a></li>
                        <li><a href="form-editors.html">Editors</a></li>
                        <li><a href="form-upload.html">File Upload</a></li>
                        <li><a href="form-summernote.html">Summernote</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-grid" /><span>Tables</span></a>
                    <ul className="ml-menu">
                        <li><a href="normal-tables.html">Normal Tables</a></li>
                        <li><a href="jquery-datatable.html">Jquery Datatables</a></li>
                        <li><a href="editable-table.html">Editable Tables</a></li>
                        <li><a href="footable.html">Foo Tables</a></li>
                        <li><a href="table-color.html">Tables Color</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-chart" /><span>Charts</span></a>
                    <ul className="ml-menu">
                        <li><a href="c3.html">C3 Chart</a></li>
                        <li><a href="morris.html">Morris</a></li>
                        <li><a href="flot.html">Flot</a></li>
                        <li><a href="chartjs.html">ChartJS</a></li>
                        <li><a href="sparkline.html">Sparkline</a></li>
                        <li><a href="jquery-knob.html">Jquery Knob</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious" /><span>Widgets</span></a>
                    <ul className="ml-menu">
                        <li><a href="widgets-app.html">Apps Widgets</a></li>
                        <li><a href="widgets-data.html">Data Widgets</a></li>
                    </ul>
                    </li>
                    <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock" /><span>Authentication</span></a>
                    <ul className="ml-menu">
                        <li><a href="sign-in.html">Sign In</a></li>
                        <li><a href="sign-up.html">Sign Up</a></li>
                        <li><a href="forgot-password.html">Forgot Password</a></li>
                        <li><a href="404.html">Page 404</a></li>
                        <li><a href="500.html">Page 500</a></li>
                        <li><a href="page-offline.html">Page Offline</a></li>
                        <li><a href="locked.html">Locked Screen</a></li>
                    </ul>
                    </li>
                    <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy" /><span>Sample Pages</span></a>
                    <ul className="ml-menu">
                        <li><a href="blank.html">Blank Page</a></li>
                        <li><a href="image-gallery.html">Image Gallery</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="timeline.html">Timeline</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="invoices.html">Invoices</a></li>
                        <li><a href="invoices-list.html">Invoices List</a></li>
                        <li><a href="search-results.html">Search Results</a></li>
                    </ul>
                    </li>
                    <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-map" /><span>Maps</span></a>
                    <ul className="ml-menu">
                        <li><a href="google.html">Google Map</a></li>
                        <li><a href="yandex.html">YandexMap</a></li>
                        <li><a href="jvectormap.html">jVectorMap</a></li>
                    </ul>
                    </li>
                    <li>
                    <div className="progress-container progress-primary m-t-10">
                        <span className="progress-badge">Traffic this Month</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} style={{width: '67%'}}>
                            <span className="progress-value">67%</span>
                        </div>
                        </div>
                    </div>
                    <div className="progress-container progress-info">
                        <span className="progress-badge">Server Load</span>
                        <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{width: '86%'}}>
                            <span className="progress-value">86%</span>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </aside>
            {/* Right Sidebar */}
            <aside id="rightsidebar" className="right-sidebar">
                <ul className="nav nav-tabs sm">
                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments" /></a></li>
                </ul>
                <div className="tab-content">
                <div className="tab-pane active" id="setting">
                    <div className="slim_scroll">
                    <div className="card">
                        <h6>Theme Option</h6>
                        <div className="light_dark">
                        <div className="radio">
                            <input type="radio" name="radio1" id="lighttheme" defaultValue="light" defaultChecked />
                            <label htmlFor="lighttheme">Light Mode</label>
                        </div>
                        <div className="radio mb-0">
                            <input type="radio" name="radio1" id="darktheme" defaultValue="dark" />
                            <label htmlFor="darktheme">Dark Mode</label>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6>Color Skins</h6>
                        <ul className="choose-skin list-unstyled">
                        <li data-theme="purple"><div className="purple" /></li>
                        <li data-theme="blue"><div className="blue" /></li>
                        <li data-theme="cyan"><div className="cyan" /></li>
                        <li data-theme="green"><div className="green" /></li>
                        <li data-theme="orange"><div className="orange" /></li>
                        <li data-theme="blush" className="active"><div className="blush" /></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h6>General Settings</h6>
                        <ul className="setting-list list-unstyled">
                        <li>
                            <div className="checkbox">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">Report Panel Usage</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                            <input id="checkbox2" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox2">Email Redirect</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                            <input id="checkbox3" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox3">Notifications</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                            <input id="checkbox4" type="checkbox" />
                            <label htmlFor="checkbox4">Auto Updates</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                            <input id="checkbox5" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox5">Offline</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                            <input id="checkbox6" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox6">Location Permission</label>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="tab-pane right_chat" id="chat">
                    <div className="slim_scroll">
                    <div className="card">
                        <ul className="list-unstyled">
                        <li className="online">
                            <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src="assets/images/xs/avatar4.jpg" alt />
                                <div className="media-body">
                                <span className="name">Sophia <small className="float-right">11:00AM</small></span>
                                <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                                <span className="badge badge-outline status" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src="assets/images/xs/avatar5.jpg" alt />
                                <div className="media-body">
                                <span className="name">Grayson <small className="float-right">11:30AM</small></span>
                                <span className="message">All the Lorem Ipsum generators on the</span>
                                <span className="badge badge-outline status" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className="offline">
                            <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src="assets/images/xs/avatar2.jpg" alt />
                                <div className="media-body">
                                <span className="name">Isabella <small className="float-right">11:31AM</small></span>
                                <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                <span className="badge badge-outline status" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className="me">
                            <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src="assets/images/xs/avatar1.jpg" alt />
                                <div className="media-body">
                                <span className="name">John <small className="float-right">05:00PM</small></span>
                                <span className="message">It is a long established fact that a reader</span>
                                <span className="badge badge-outline status" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src="assets/images/xs/avatar3.jpg" alt />
                                <div className="media-body">
                                <span className="name">Alexander <small className="float-right">06:08PM</small></span>
                                <span className="message">Richard McClintock, a Latin professor</span>
                                <span className="badge badge-outline status" />
                                </div>
                            </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
        </>
    )
}

export default Header
