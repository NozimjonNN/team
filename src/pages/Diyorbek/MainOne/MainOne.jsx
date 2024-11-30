import ImgOne from '../Images/ImgOne.jpeg'
import React from 'react'
import "../MainOne/MainONe.css"



const MainOne = () => {
    return(
        <div style={{marginTop:"100px",display:"flex",justifyContent:"center"}}>

            <div className='MainOne' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"50px",width:"1400px",height:"400px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",borderRadius:"10px"}}>
                <div><img className='imgOne' src={ImgOne} alt="" /></div>
                <div>
                    <div style={{fontSize:"25px",fontWeight:"400"}}>Our company creates modern, elegant homes that combine style, <br /> functionality, and sustainability. This design reflects our focus on <br /> clean lines, open spaces, and maximizing natural light. We use <br /> high-quality materials, energy-efficient solutions, and thoughtful <br /> landscaping to ensure harmony with the environment.

Each home <br /> is designed to balance comfort and beauty, offering personalized <br /> spaces tailored to our clients' needs. Our goal is to deliver timeless, <br /> sustainable designs that enhance both quality of life and the <br /> surrounding landscape.</div>
                </div>
            </div>
        </div>
    )
}

export default MainOne