export default class Grupo{

    constructor(codigoGrupo,miembros){

        this._codigoGrupo = codigoGrupo;
        this._miembros = miembros;
    }

    miembros(){
        return this._miembros;
    }
}