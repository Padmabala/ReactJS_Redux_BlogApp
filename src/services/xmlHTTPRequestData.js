import { PRIMARY_SERVER } from "../constants/serverUrls";

//FOR DEFAULT EXPORTS WE IMPORT IT AS import PRIMARY_SERVER  from "../constants/serverUrls";
//in const  instead of default export, 
//declare constants as UCase, components pascal case
//route-> contains /posts; method contains post


const xmlHTTPRequestData=(route,method)=>{
	return new Promise(function(resolve, reject) {
    const requestUrl=PRIMARY_SERVER+route;
    let request=new XMLHttpRequest();
    request.responseType='json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method,requestUrl,true);
    request.send();
  });
};

export default xmlHTTPRequestData;