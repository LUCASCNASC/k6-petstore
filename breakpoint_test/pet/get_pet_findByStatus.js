import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/pet/findPetsByStatus/';
const myCounter = new Counter('quantidade de chamadas');
const myGauge = new Gauge('Tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('taxa de espera');

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ],
    thresholds: {
        'http_req_duration{group:::requisição por id}': ['p(95) < 500']
    }
}

export default function(){
    group('requisição todos', function(){
        const response1 = http.get(`${process.env.BASE_URL}/${PATH_URL}`);
        sleep(0.5);
        check(response1, {
            'status code 200 get all': (r) => r.status === 200
        });
    });
   
    group('requisição por id', function(){
        const response2 = http.get(`${process.env.BASE_URL}/${PATH_URL}/1`);
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