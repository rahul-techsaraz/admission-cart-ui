import SignUpModel from "../model/SignUpModel";
import userImage from '../../images/user-icon.svg'
import { useState } from "react";
import { Link  } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { tabName } from "../../data/header/TabData";
import { megaMenuData } from "../../data/header/megaMenuData";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { toggelLoginModel, toggelSignupModel } from "../../features/commonSlice";
import LoginModel from "../model/LoginModel";
const Header = () => {
    const [model, setModel] = useState(false);
    
    //Redux State
    const { openSignupModel,openLoginModel } = useSelector(state => state.common)
    //Dispatch Actions
    const dispatch = useDispatch();
    const handleModel = () => {
        dispatch(toggelSignupModel({flag:false}))

        dispatch(toggelLoginModel({flag:true}))
    }
 
   
    return(
        <>
            {openSignupModel && <SignUpModel />}
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
                                <li><span><i className="fa fa-facebook" aria-hidden="true"></i></span></li>
                                <li><span><i className="fa fa-instagram" aria-hidden="true"></i></span></li>
                                <li><span><i className="fa fa-youtube-play" aria-hidden="true"></i></span></li>
                                <li><span><i className="fa fa-twitter" aria-hidden="true"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <nav className="navbar">
                <section className="navbar-left">
                  <Link to="/"><span  className="brand" >LOGO</span></Link>
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
                    <button className="menu-blck" onClick={() => handleModel()}><img src={userImage} alt="" /></button>
                </section>
            </nav>
        </div>
    </header>
        </>
    )
}
export default Header;