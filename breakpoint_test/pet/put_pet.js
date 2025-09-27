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
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Update an existing pet
export default function(){
    http.put('https://petstore.swagger.io/#/pet/updatePet');
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