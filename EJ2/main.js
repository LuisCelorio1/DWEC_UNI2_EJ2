import Instituto from './instituto.js';
import Grupo from './grupo.js';


const ies = new Instituto(3333,"IES Bernaldo");

const grupo1 = new Grupo(1111,20);
const grupo2 = new Grupo(2222,20);
ies.addGrupo(grupo1);
ies.addGrupo(grupo2);


console.log(ies.codigoInstituto());

var totalAlumnos = ies.alumnos();
console.log(totalAlumnos);