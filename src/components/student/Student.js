import React, { useState } from "react";


const Student = () => {

let [a,setA] = useState(10);

let [mobile, setMobile] = useState({
    brand: "Apple",
    color: "silver",
    price: 45000
})

    return(
        <>
       <h2>student</h2>
       <h3>a value: {a}</h3>
       <h2>{JSON.stringify(mobile)}</h2>
        </>
    )
}

export default Student;