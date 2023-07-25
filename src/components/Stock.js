import React from 'react'

const Stock =({ match }) => {
    
const { symbol } = match.params; 

return <div>A single stock with symbol: {symbol}</div>

};

export default Stock; 
