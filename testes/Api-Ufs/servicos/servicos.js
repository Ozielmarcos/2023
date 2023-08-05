import ufs from '../dados/dados.js';

const buscarUfs = () => {
    return ufs;
};

const buscarUfPorNome = (nomeUf) => {
    const resultado = ufs.filter((uf) => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
    return resultado;
};

const buscarPorId = (idUf) => {
    const id = parseInt(idUf);
    return ufs.find((uf) => uf.id === id);
};

export { buscarUfs, buscarUfPorNome, buscarPorId };