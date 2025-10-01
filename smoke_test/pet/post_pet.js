import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter} from 'k6/metrics';
import { Gauge } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { Trend } from 'k6/metrics'; 

const chamadas = new Counter('quantidade de chamadas');
const myGauge = new Gauge('Tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('taxa de espera');

export const options = {
    vus: 1,
    duration: '1m',
    thresholds: {
        'http_req_duration{group:::requisição por id}': ['p(95) < 500']
    }
}

//Add a new pet to the store
export default function(){
    http.post('https://petstore.swagger.io/#/pet/addPet');
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