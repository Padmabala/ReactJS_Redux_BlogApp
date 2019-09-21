import { PRIMARY_SERVER } from "../constants/serverUrls";
//FOR DEFAULT EXPORTS WE IMPORT IT AS import PRIMARY_SERVER  from "../constants/serverUrls";
//in const  instead of default export, 
//declare constants as UCase, components pascal case
//route-> contains /posts; method contains post

const fetchData=(route,method)=>{
    const requestUrl=PRIMARY_SERVER + route;
    return new Promise((resolve,reject)=>{
        fetch(requestUrl)
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        });
    });
   
    
};

export default fetchData;