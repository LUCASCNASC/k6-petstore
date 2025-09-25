import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Add a new pet to the store
export default function(){
    http.post('https://petstore.swagger.io/#/pet/addPet');
}