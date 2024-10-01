import JatekModell from "../model/JatekModell.js";
import JatekNezet from "../view/JatekNezet.js";


export default class Jatek{
    #jLista = [];

    constructor(){
        this.jModell = new JatekModell();
        this.#jLista = this.jModell.getLista();
        //console.log(this.getJLista())
        this.jNezet = new JatekNezet(this.getJLista());
        this.jNezet.megj_Lista_feltolt();
    }

    getJLista(){
        return this.#jLista;
    }
}