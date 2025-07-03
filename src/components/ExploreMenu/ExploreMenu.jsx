import React from "react";
import './ExploreMenu.css';
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {


    return (
        <div className="PunCafe-menu" id="PunCafe-menu">
            <div className="PunCafe-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="PunCafe-menu-list-item">
                            <button className={category === item.menu_name ? "active" : ""}> 
                                <p>{item.menu_name}</p> 
                            </button>
                            
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}
export default ExploreMenu