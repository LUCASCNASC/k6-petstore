import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Deletes a pet by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/pet/deletePet');
}