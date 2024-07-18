export default class Persona {
    constructor(nomb, ed, sex) {
        this.nombre = nomb;
        this.edad = ed;
        this.sexo = sex;
    }

    set nombre(nomb) {
        this._nombre = nomb;
    }

    get nombre() {
        return this._nombre;
    }

    set edad(ed) {
        this._edad = ed;
    }

    get edad() {
        return this._edad;
    }

    set sexo(sex) {
        this._sexo = sex;
    }

    get sexo() {
        return this._sexo;
    }
}