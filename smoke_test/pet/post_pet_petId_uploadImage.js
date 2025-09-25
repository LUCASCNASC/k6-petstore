import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Uploads an image
export default function(){
    http.post('https://petstore.swagger.io/#/pet/uploadFile');
}