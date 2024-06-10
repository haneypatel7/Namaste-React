import Rescard from "./Rescard";
const resobj=[


    {
          resname:'kfc',
          rating:'5 star'
  
      },
      {
          resname:'MCD',
          rating:'4 star'
  
      },
      {
          resname:'DOMINO',
          rating:'3 star'
  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star'
  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star'
  
      }
      ,
      {
          resname:'DOMINO',
          rating:'3 star'
  
      }
  ]
const Body=()=>
    {
        return(

            <div className="body">
                <div className="search">
                  
                </div>
                <div className="res-container">
                    {/* <Rescard resData={resobj[0]}/>
                    <Rescard resData={resobj[1]}/>
                    <Rescard resData={resobj[2]}/> */}
                    
                    {resobj.map((ress,id) => (
            <Rescard key={id} resData={ress} />
        ))}

                </div>


            </div>
        )
    };

    export default Body;