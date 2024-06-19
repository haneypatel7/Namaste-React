import { useState } from "react";
import Rescard from "./Rescard";
const resobj=[


    {
          resname:'kfc',
          rating:'5 star',
          rating1:3
  
      },
      {
          resname:'MCD',
          rating:'4 star',
          rating1:5

  
      },
      {
          resname:'DOMINO',
          rating:'3 star',
          rating1:5

  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star',
          rating1:3
  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star',
          rating1:3
  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star',
          rating1:3
  
      }
  ]
const Body=()=>
    {
        const[searchText,setText]=useState('');
        const[s1,s2]=useState('');

        const [listOfRestaurants, setListOfRestaurants] = useState([resobj]);


        console.log(searchText);
        
        return(

            <div className="body">
                <div className="search">
                    <input type="text"
                    value={searchText}
                    onChange={(e)=>
                        {
                            setText(e.target.value);
                        }
                    }
                    
                    ></input>


                    <button 
                    onClick={() => {
                        // * Filter th restaurant cards and update the UI
                        // * searchText
                        console.log(searchText);

                        const newdata = resobj.filter((res) =>
                            res.resname.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setListOfRestaurants(newdata);
                        
                        
          
                        
                      }}
                    >Search</button>

                    {/* <input
                    type="text"
                    value={s1}
                    onChange={(e)=>
                        {
                            s2(e.target.value);
                        }}  

                    ></input> */}

                    <button
                    onClick={()=>
                        {
                        const newdata1=resobj.filter((e)=>
                            e.rating1>=4
                        );
                         console.log(newdata1);   
                        setListOfRestaurants(newdata1);

                        }

                    }   
                    >best hotel</button>
                  
                </div>
                <div className="res-container">
                    {/* <Rescard resData={resobj[0]}/>
                    <Rescard resData={resobj[1]}/>
                    <Rescard resData={resobj[2]}/> */}
                    
                    


                         {listOfRestaurants.map((ress, id) => (
                            <Rescard key={id} resData={ress} />
                        ))}
                    

                </div>


            </div>
        )
    };

    export default Body;