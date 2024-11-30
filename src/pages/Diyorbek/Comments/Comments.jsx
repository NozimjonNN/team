import React from "react";
import imgFive from "../Images/imgFive.jpg"
import imgSix from "../Images/imgSix.jpg"
import imgSeven from "../Images/imgSeven.jpg"
import '../Comments/Comments.css'

const Contacts = () => {
    return(
        <div>
            <div style={{display:"flex",gap:"75px",justifyContent:"center",marginTop:"100px"}}>
                
                <div className="cardCom" style={{width:"275px",height:"325px",boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",borderRadius:"15px"}}>
                    <div style={{display:"flex",gap:"15px",alignItems:"center",marginLeft:"20px"}}>
                        <div><img src={imgFive} style={{borderRadius:"50%",width:"50px",marginTop:"30px"}} alt="" /></div>
                        <div style={{fontSize:"18px",fontWeight:"600",marginTop:"30px"}}>Ethan Parker</div>
                    </div>
                    <div style={{marginTop:"20px",fontSize:"18px",marginLeft:"30px"}}>Old-style buildings are <br /> more than just structures; <br /> they are living pieces of <br /> history. Their intricate<br /> details,  traditional<br /> craftsmanship and<br /> timeless designs evoke<br /> a sense of  nostalgia and <br /> connect us to the past..</div>
                </div>

                <div className="cardCom" style={{width:"275px",height:"325px",boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",borderRadius:"15px"}}>
                    <div style={{display:"flex",gap:"15px",alignItems:"center",marginLeft:"20px"}}>
                        <div><img src={imgSix} style={{borderRadius:"50%",width:"50px",marginTop:"30px"}} alt="" /></div>
                        <div style={{fontSize:"18px",fontWeight:"600",marginTop:"30px"}}>Ethan Parker</div>
                    </div>
                    <div style={{marginTop:"20px",fontSize:"18px",marginLeft:"30px"}}>Old-style buildings are <br /> more than just structures; <br /> they are living pieces of <br /> history. Their intricate<br /> details,  traditional<br /> craftsmanship and<br /> timeless designs evoke<br /> a sense of  nostalgia and <br /> connect us to the past..</div>
                </div>

                <div className="cardCom" style={{width:"275px",height:"325px",boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",borderRadius:"15px"}}>
                    <div style={{display:"flex",gap:"15px",alignItems:"center",marginLeft:"20px"}}>
                        <div><img src={imgSeven} style={{borderRadius:"50%",width:"50px",marginTop:"30px"}} alt="" /></div>
                        <div style={{fontSize:"18px",fontWeight:"600",marginTop:"30px"}}>Ethan Parker</div>
                    </div>
                    <div style={{marginTop:"20px",fontSize:"18px",marginLeft:"30px"}}>Old-style buildings are <br /> more than just structures; <br /> they are living pieces of <br /> history. Their intricate<br /> details,  traditional<br /> craftsmanship and<br /> timeless designs evoke<br /> a sense of  nostalgia and <br /> connect us to the past..</div>
                </div>

            </div>
        </div>
    )
}



export default Contacts