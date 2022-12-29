import React from "react";
import './Baner.css'

function Baner(){
    return(
        <>
        <div className="Baner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://i.teknolojioku.com/2/1280/720/storage/files/images/2019/10/02/netflix-halloween-gmt2-cover-oTQR_cover.jpg")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1>
                </h1>
            </div> 
        </div>
        </>
    )
}

export default Baner;