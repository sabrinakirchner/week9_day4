import React from "react";
import Stock from "./Data";


const Dashboard = () => {
    return(
        
        <div> 
            <h2>All Stocks</h2>
            <ul>
                {Stock.map((Stock) => (
                  <li key={Stock.symbol} >
                    {Stock.name} - {Stock.symbol}
                   </li> 
                ))}
            </ul>
        </div>
    )
};


export default Dashboard; 






