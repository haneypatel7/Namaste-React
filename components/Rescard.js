const Rescard=(props)=>
    {
        const{resData}=props;
        return(
            <div className="rescard">

            <img src={"test.jpg"}/>

                
            <h1>{resData.resname}</h1>
            <h1>{resData.rating}</h1>
            



            </div>

        )
    };


    export default Rescard;