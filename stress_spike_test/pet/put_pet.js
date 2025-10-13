import http from 'k6/http'; 
import { BASE_URL } from '../../config';
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/store/deleteOrder/';
const myCounter = new Counter('quantidade de chamadas');
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

//Update an existing pet
export default function(){
    group('requisição todos', function(){
        const response1 = http.get(`${BASE_URL}/${PATH_URL}`);
        sleep(0.5);
        check(response1, {
            'status code 200 get all': (r) => r.status === 200
        });
    });
    
    group('requisição por id', function(){
        const response2 = http.get(`${BASE_URL}/${PATH_URL}/1`);
        sleep(0.5);
        check(response2, {
            'status code 200 get id': (r) => r.status === 200
        }); 
    });

    myCounter.add(1);
    myGauge.add(req.timings.blocked);
    myRate.add(req.status === 200);
    myTrend.add(req.timings.waiting);
}