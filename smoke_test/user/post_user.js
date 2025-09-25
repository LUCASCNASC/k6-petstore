import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Create user
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUser');
}