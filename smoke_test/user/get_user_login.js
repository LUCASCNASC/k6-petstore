import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Logs user into the system
export default function(){
    http.get('https://petstore.swagger.io/#/user/loginUser');
}