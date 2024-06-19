//const heading = React.createElement("h1", {using this object you put and attribute on in}, "Hello World!");
// const parent = React.createElement("h1", {id:"heading"}, "Hello World!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

import React from "react";
import ReactDOM from "react-dom";
import Header from  "./components/Header";
import Error from "./components/Error";
import Body from "./components/Body";
import About from "./components/About";
import Menu from "./components/Menu";

import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id :"child"},
//        [ React.createElement("h1",{id:"h1"},"hello from h1"),
//         React.createElement("h2",{id:"h2"},"hwllo from h2")]
//     )
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



// React Element

// const parent=React.createElement("h1",{id:"heading"},"haney is here!");



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
    
    
    // const Rescard=(props)=>
    //     {
    //         const{resData}=props;
    //         return(
    //             <div className="rescard">

    //             <img src={"test.jpg"}/>

                    
    //             <h1>{resData.resname}</h1>
    //             <h1>{resData.rating}</h1>
                



    //             </div>

    //         )
    //     };

        // const Body=()=>
        //     {
        //         return(

        //             <div className="body">
        //                 <div className="search">
                          
        //                 </div>
        //                 <div className="res-container">
        //                     {/* <Rescard resData={resobj[0]}/>
        //                     <Rescard resData={resobj[1]}/>
        //                     <Rescard resData={resobj[2]}/> */}
                            
        //                     {resobj.map((res,id) => (
        //             <Rescard key={id} resData={res} />
        //         ))}
    
        //                 </div>


        //             </div>
        //         )
        //     };



const App=()=>
    {
        return(
        <div className="application">

        <Header/>
        <Outlet/>
        
        


        </div>
    )};

    const appRounter=createBrowserRouter([
        
        // path: '/',
        // element: <App/>,
        // children: [
        //     {
        //       path: '/',
        //       element: <Body />,
        //     },
        //     {
        //       path: '/about',
        //       element: <About/>,
        //     },]
        // {
        //     path:"/",
        //     element:<App/>,
        //     errorElement:<Error/>,
        // },
        // {
        //     path:"/about",
        //     element:<About />,


        // },
        {
            path:"/",
            element:<App/>,

            children:[
                {
                    path:"/",
                    element:<Body/>,
                }
                ,
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    
                },
                {
                    path:"/Resturant/:resId",
                    element:<Menu/>
                }
            ],
            // errorElement:<Error/>,
        }
        
    ]);

const root=ReactDOM.createRoot(document.getElementById("demo"));

root.render(<RouterProvider router={appRounter}/>);





