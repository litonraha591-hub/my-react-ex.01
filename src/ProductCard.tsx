import React from 'react';

// Define the TypeScript Interface for Props



export default function ProductCard({name, price,category,image,inStock}){
    return (
        <div>
            <p>name:{name} </p>
            <p> price:({price})</p>
            {price>1000 && <p>Premium Product</p>}
            <p>category {category}</p>
            {inStock===true? <p>Available</p>: <p>Not Availbale</p>}
            <img src={image} alt="keyboard" style={{height:"200px", width:"200px"}} />
        </div>
    )
}