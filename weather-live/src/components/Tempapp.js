import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp=()=>{
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Hyderabad");

    useEffect(()=>{
     const fetchApi= async()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=b47f606f4140c5a53fc5bdad18747bd2`; 
        const response=await fetch(url);
        const resJson=await response.json();
        console.log(resJson);
        setCity(resJson.main);

     };
     
     fetchApi();

    },[search])

    
    return(
        <>
            <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputField"
                onChange= {
                    (event)=>{
                        setSearch(event.target.value)
                    }
                }
                />
            </div>

            
        
        {!city ? (
            <p className="error">No Data Found</p>
        ) : (
            <div>
            <div className="info">
            <h1 className="location">
            <i className ="fa-regular fa-street-view"> </i>{search}
            </h1>
            <h1 className="temp">
            <h1>{city.temp}Cel</h1>
        
            </h1>
            <h3 className="tempmin_max">Min:{city.temp_min} Cel |Max:{city.temp_max} Cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>

        )

        }
            
        </div>
        </>
    )

            }
export default Tempapp;