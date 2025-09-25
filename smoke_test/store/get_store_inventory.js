import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Returns pet inventories by status
export default function(){
    http.get('https://petstore.swagger.io/#/store/getInventory');
    sleep(1);
}