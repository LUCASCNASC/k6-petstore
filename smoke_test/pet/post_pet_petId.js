import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Updates a pet in the store with form data
export default function(){
    http.post('https://petstore.swagger.io/#/pet/updatePetWithForm');
}