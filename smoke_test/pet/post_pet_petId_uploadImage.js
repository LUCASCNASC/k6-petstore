import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Uploads an image
export default function(){
    http.post('https://petstore.swagger.io/#/pet/uploadFile');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}