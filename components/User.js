const User=(props)=>
    {
        const{userdata}=props;
        console.log(userdata);
        return(
            
            <div className="user-div">
                <img src={userdata.img} alt={userdata.name}></img>
                <h2>Name:{userdata.name}</h2>
                <h3>Location:{userdata.location}</h3>
                <h4>Contact:{userdata.contact}</h4>
            </div>


        );
    }

export default User;
