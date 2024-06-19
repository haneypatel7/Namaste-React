import { useEffect,useState } from "react";

const Menu=()=>
    {
        const{resData,setResdata}=useState([""]);
        
        useEffect(()=>
        {
            fetchdata();
        },[]);

        const fetchdata=async()=>
            {
                const data=await fetch("https://corsproxy.io//www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

                const json=await data.json();
                console.log(json);
            }

        return(
            <div className="Menu">
            <h1>RES NAME</h1>

            </div>

        );
    }



    export default Menu;