import React, { useEffect, useState } from "react";
import './Nav.css'

function Nav(){
    const [show,handleshow] =useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleshow(true);
        }
        else{
            handleshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return()=> window.removeEventListener("scroll",transitionNavBar)
    },[])

    return(
        <>
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img 
                className="nav_logo" 
                src="https://th.bing.com/th/id/R.4d30a09d38e6dfe3feaa31920a680108?rik=GnWkgmKvj5nwNg&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2016_09%2f76248820160921034356.jpg&ehk=grD%2fdqb%2b43FMvO3KHmAdPwgUvOikuZkwrJQwMPdCHUM%3d&risl=&pid=ImgRaw&r=0"
                />
                <img 
                className="nav_avtar" 
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                />
            </div>
        </div>
        </>
    )
}

export default Nav;