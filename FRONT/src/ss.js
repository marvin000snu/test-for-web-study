const fetch = require("node-fetch");

const signup= async function (user_name,user_email,user_password){
    
    const results = await fetch("http://localhost:3001/api/login/signup",{
        method: 'POST',
        body: JSON.stringify({
            "user_email": "sfdddffsdfldf1",
            "user_password": "1ddff",
            "user_name" : "dfsdf"
        }),
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }) 
    console.log(results)
}
    
signup("mar","mar","madsfr")