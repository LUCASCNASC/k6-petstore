import http from 'k6/http'; 
import { sleep, check } from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function(){
    group('requisição todos', function(){
        const response1 = http.get('https://petstore.swagger.io/#/pet/getPetById');
        sleep(0.5);
    });
    
    group('requisição por id', function(){
        const response2 = http.get('https://petstore.swagger.io/#/pet/getPetById/1');
        sleep(0.5);
    });
}