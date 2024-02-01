import { useState,useEffect } from "react"

function Timer(){
    const [sec,setSec]=useState(11)
    const [isActive,setIsActive]=useState(true)
     
     
     
    useEffect(function(){
        let interval;
        console.log("render");
        if(isActive){

            interval=setInterval(function(){
                setSec((prev)=>{
                    if(prev<=1){
                        setIsActive(false)
                        return 0
                    }
                    return prev-1
                })
            },1000)

        }

        return ()=>{
            clearInterval(interval)
        }
        
    },[isActive])

    return(
        <>
         <h4>Timer : {sec} &nbsp; <button onClick={()=>setIsActive(!isActive)}>Pause Timer</button> <button onClick={()=>{setSec(12)}}>Reset Timer</button></h4>  
         
        </>
    )
}
export default Timer