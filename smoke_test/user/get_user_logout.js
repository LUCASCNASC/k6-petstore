import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Logs out currente logged in user session
export default function(){
    http.get('https://petstore.swagger.io/#/user/logoutUser');
}