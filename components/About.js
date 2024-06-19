
import User from "./User";
const userobj=[
    {
        name:"haney",
        location:"surat",
        contact:"7473840293",
    },
    {
        name:"raj",
        location:"surat",
        contact:"12892382398",
    },
    {
        name:"patel",
        location:"surat",
        contact:"03039393939",
    }

]
const About=()=>{
    
        return(
        
        
            <div>
                
                <h3>About The User</h3>
               {
                userobj.map((res,id)=>
                (
                    <User key={id} userdata={res}/>

                ))
               }
                
                

            </div>

        );
    };



// const About = () => {
//     return (
//         <div>
//             <h3>about us page render</h3>
//             <h2>opps</h2>
//         </div>
//     );
// };




    export default About;