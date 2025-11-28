import http from 'k6/http'; 
import { sleep, check } from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function(){
    group('requisição todos', function(){
        const res = http.post('https://petstore.swagger.io/#/pet/addPet');
        sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
    });
}