import http from 'k6/http';
import {sleep, check} from 'k6';
import { Counter} from 'k6/metrics';
import { Gauge } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics'; 

const chamadas = new Counter('quantidade de chamadas');
const myGauge = new Gauge('Tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('taxa de espera');

export const options = {
    stages: [
        { duration: '10s', target: 100 }, // Ramp-up to 100 users over 10 seconds
        { duration: '1m', target: 100 },  // Stay at 50 users for 1 minute
        { duration: '10s', target: 1400 },   // Ramp-down to 0 users over 30 seconds   
        { duration: '3m', target: 1400 }, // Ramp-up to 50 users over 30 seconds
        { duration: '10s', target: 100 },  // Stay at 50 users for 1 minute
        { duration: '3m', target: 100 },   // Ramp-down to 0 users over 30 seconds   
        { duration: '10s', target: 0 }   // Ramp-down to 0 users over 30 seconds
    ],
    thresholds: {
        'http_req_duration{group:::requisição por id}': ['p(95) < 500']
    }
}

//Returns pet inventories by status
export default function(){
    group('requisição todos', function(){
        const response1 = http.get('https://petstore.swagger.io/#/store/getInventory');
        sleep(1);
        check(response1, {
            'status code 200 get all': (r) => r.status === 200
        });
    });
   
    group('requisição por id', function(){
        const response2 = http.get('https://petstore.swagger.io/#/store/getInventory/1');
        sleep(1);
        check(response2, {
            'status code 200 get id': (r) => r.status === 200
        }); 
    });
    //contador
    chamadas.add(1);
    //medidor
    myGauge.add(req.timings.blocked);
    //taxa
    myRate.add(req.status === 200);
    //tendencia
    myTrend.add(req.timings.waiting);
}