import { Link } from "react-router-dom";
import { megaMenuData } from "../../data/header/megaMenuData";
import { useEffect } from "react";

const MegaMenu = ({ menuData }) => {
    useEffect(() => {
console.log(menuData)
    }, [])
    const addDash = (str) => {
        if (str) {
            const splitStr = str.split(" ")
        return splitStr.length > 1 ? splitStr.join("-").toLowerCase() : splitStr.join("").toLowerCase();
        }
        
    }
    return(
        <>
<div className="submenu megamenu megamenu-column-4">

<ul className="mega_menu">
    <div className="brand-category-content shop-category-contain">
        <div className="shop-menu">
                            <ul className="shop-category">
                                {menuData.map((menuItems, index) => (
                                    <li className={(menuItems?.active ? 'active' : '') || index === 0 ? 'active':''} key={`${menuItems.categoryName}+${index}`}>
                                         {menuItems.categoryName !== '' && <Link key={`${menuItems.categoryName}+${index}`}>{menuItems.categoryName}</Link>}
                                        <div className="shop-mega-menu hover">
                                            {menuItems?.data.map((subMenuItems, index) => (
                                                 <ul>
                                                    <h6><span>{subMenuItems.heading}</span></h6>
                                                    {subMenuItems?.subMenu.map((menu, index) => (
                                                        <Link to={menu.path+addDash(menu.name)}><li><span>{menu.name}</span></li></Link>
                                                    ))}
                           
                        </ul>
                                            ))}
                       
                       
                    </div>
                </li>
                                ))}
                
               
            </ul>
        </div>
    </div>
</ul>





</div>
        </>
    )
}
export default MegaMenu;