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
        { duration: '5m', target: 100 }, // Ramp-up to 400 users over 5 minutes
        { duration: '10m', target: 100 },  // Stay at 400 users for 10 minutes
        { duration: '5m', target: 0 }
    ]
}

//Updated user
export default function(){
    http.put('https://petstore.swagger.io/#/user/updateUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
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