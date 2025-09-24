import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

export default function(){
    http.get('https://petstore.swagger.io/#/pet/findPetsByStatus');
}