import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
};

//Delete purchase order by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
}