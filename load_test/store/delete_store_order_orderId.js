import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/store/deleteOrder/';
const myCounter = new Counter('quantidade de chamadas');
const myGauge = new Gauge('Tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('taxa de espera');

export const options = {
    stages: [
        { duration: '5m', target: 100 }, // Ramp-up to 400 users over 5 minutes
        { duration: '10m', target: 100 },  // Stay at 400 users for 10 minutes
        { duration: '5m', target: 0 }
    ],
    thresholds: {
        'http_req_duration{group:::requisição por id}': ['p(95) < 500']
    }
}

export default function(){
    group('requisição todos', function(){
    const response1 = http.gdeleteet(`${process.env.BASE_URL}/${PATH_URL}`);
    sleep(0.5);
    check(response1, {
        'status code 200 delete all': (r) => r.status === 200
    });
    });

    group('requisição por id', function(){
    const response2 = http.delete(`${process.env.BASE_URL}/${PATH_URL}/1`);
    sleep(0.5);
    check(response2, {
        'status code 200 gedeletet id': (r) => r.status === 200
    }); 
    });
    
    myCounter.add(1);
    myGauge.add(req.timings.blocked);
    myRate.add(req.status === 200);
    myTrend.add(req.timings.waiting);
}