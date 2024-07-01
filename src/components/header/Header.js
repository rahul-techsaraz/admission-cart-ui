import userImage from '../../images/user-icon.svg'
import logo from '../../images/logo.png'
import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { tabName } from "../../data/header/TabData";
import { megaMenuData } from "../../data/header/megaMenuData";
import { useDispatch, useSelector } from "react-redux";
import { toggelLoginModel, toggelAfterLoginModel, updateauthenticateUser } from "../../features/commonSlice";
import LoginModel from "../model/LoginModel";
import AfterLoginModel from "../model/AfterLoginModel";
import constants from '../../utils/Constants/constants';
import httpFetch from '../../fetch/useFetch';
const Header = () => {
    const {authenticateUser, lastLocation} = useSelector((state)=>state.common)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authorise = async ()=>{
        const custHeader = {...constants.apiHeader.HEADER, "Authorization" : JSON.parse(localStorage.getItem('loginResponse')).token}
        const jsonData = await httpFetch(constants.apiEndPoint.USER_AUTHORISATION,constants.apiMethod.GET,custHeader)
        if(jsonData.success == 0){
            localStorage.removeItem('loginResponse')
            dispatch(updateauthenticateUser({flag:false}))
        }else{
            dispatch(updateauthenticateUser({flag:true}))
        }
    }
useEffect(()=>{
    if(!localStorage.getItem("loginResponse")){
        dispatch(toggelLoginModel({flag:true}))
        dispatch(toggelAfterLoginModel({flag:false}))
        dispatch(updateauthenticateUser({flag:false}))
    }else{
        authorise()  
    }
},[])
useEffect(()=>{
    if(!authenticateUser){
        navigate('/')
     }
    // else{
    //     navigate(lastLocation.pathname)
    // }
},[authenticateUser])

    //Redux State
    const { openAfterLoginModel, openLoginModel } = useSelector(state => state.common)
    //Dispatch Actions
    const handleModel = () => {
        if(localStorage.getItem("loginResponse") && openAfterLoginModel === false){
            dispatch(toggelAfterLoginModel({flag:true}))
            dispatch(toggelLoginModel({flag:false}))
        }else if(localStorage.getItem("loginResponse") && openAfterLoginModel === true){
            dispatch(toggelAfterLoginModel({flag:false}))
        }else{
            dispatch(toggelAfterLoginModel({flag:false}))
            dispatch(toggelLoginModel({flag:true}))
        }
    }
    const handleModelLeave= ()=>{
        // dispatch(toggelAfterLoginModel({flag:false}))
    }
 
   
    return(
        <>
            {openAfterLoginModel && <AfterLoginModel/>}
        {openLoginModel && <LoginModel/>}
            
        <header className="header">
        <div className="h7_header-top d-none d-md-block">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-9">
                            <ul className="h7_header-top-list">
                                <li><span href="tel:8812356877787 "><i className="fa fa-phone" aria-hidden="true"></i> (88) 123 568 777 87 </span></li>
                                <li><span href="mailto:info@xyz-text.com "><i className="fa fa-envelope-o" aria-hidden="true"></i> info@xyz-text.com</span></li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-4 col-md-3">
                            <div className="h7_header-top-social">
                                <ul className="d-flex align-items-center justify-content-end">
                                <li><a href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

            </div>
                    
        </div>
        <div className="container">
            <nav className="navbar">
                <section className="navbar-left">
                  <Link to="/">
                    <img src={logo} alt="logo" className='img-fluid' />
                  </Link>
                   <div className="burger" id="burger">
                      <span className="burger-line"></span>
                      <span className="burger-line"></span>
                      <span className="burger-line"></span>
                   </div>
                </section>
                <section className="navbar-center">
                   <span className="overlay"></span>
                   <div className="menu" id="menu">
                      <div className="menu-header">
                         <span className="menu-arrow"><i className="bx bx-chevron-left"></i></span>
                         <span className="menu-title"></span>
                      </div>
                      <ul className="menu-inner">
                        {tabName.map((list,index) => (
                            <li className="menu-item menu-dropdown" key={index}>
                            <Link to={list.path}>
                            <span className="menu-link" >{list.name}<i className="bx bx-chevron-right"></i></span></Link>
                            {list.megaMenu && <MegaMenu menuData={megaMenuData.filter(data => data.mainCategory === list.name)} />}
                         </li>
                        ))}
                         
                        
                      </ul>
                   </div>
                </section>
                <section className="navbar-right">
                    <span  className="menu-block"><img src="images/search-icon.svg" alt="" /></span>
                    <button className="menu-block" onClick={() => handleModel()} onMouseLeave={()=>handleModelLeave()}><img src={userImage} alt="" /></button>
                </section>
            </nav>
        </div>
    </header>
        </>
    )
}
export default Header;