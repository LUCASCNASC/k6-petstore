import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Creates list of users with given input array
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUsersWithArrayInput');
}