import { verificaChuvaPorData, verificaChuvaProximosMeses } from "./Funcoes/filtros.js";
import imprimeListaDeChuvas from "./Funcoes/interface.js";
import chuva_meteoros from "./data/chuva_de_meteoros.js";

const data = new Date();

const chuvasVisiveisHoje = chuva_meteoros.filter((chuva) => verificaChuvaPorData(chuva, data)
);

const chuvasVisiveisProximosMeses = chuva_meteoros.filter((chuva) => verificaChuvaProximosMeses(chuva, data)
);

console.log('Chuvas de Meteoros');

if (chuvasVisiveisHoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1
        ? '1 chuva de meteoros que pode ser vista hoje'
        : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    console.log(msg);

    imprimeListaDeChuvas(chuvasVisiveisHoje);

} else {
    console.log('\nNenhuma chuva de meteoros hoje');
}

console.log('\nNão percam as próximas chuvas de meteoros: ');
imprimeListaDeChuvas(chuvasVisiveisProximosMeses);