import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Delete purchase order by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
}