import React from "react";
import Logo from '../Images/Logo.png'
import '../Navbar/Navbar.css'




const Navbar = () => {
    return(
        <div>
            <div>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <div className="Logo" style={{display:"flex",alignItems:"center",gap:"15px"}}>
                    <img src={Logo} style={{width:"180px"}} alt="" />
                    <div style={{fontWeight:"800",fontSize:"26px",display:"flex",alignItems:"center"}}>Old <br /> Style <br /> Buildings</div>
                    </div>
                <div style={{fontSize:"25px", fontWeight:"500",display:"flex",gap:"20px"}}>

                    <div className="text1"><a href="" >Home</a></div>
                    <div className="text1"><a href="" >About</a></div>
                    <div className="text1"><a href="" >Comments</a></div>

                </div>
                </div>
                
            </div>
        </div>
    )
}


export default Navbar