import JatekModell from "../model/JatekModell.js";
import JatekNezet from "../view/JatekNezet.js";


export default class JatekVezerlo{
    #jLista = [];

    constructor(){
        this.jModell = new JatekModell();
        this.#jLista = this.jModell.getLista();
        //console.log(this.getJLista())
        this.jNezet = new JatekNezet();
        this.jNezet.megj_Lista_feltolt(this.getJLista());
        this.jNezet.lista_megjelenit(this.jNezet.getEbbenMegj(), this.jNezet.getMegjLista());
        console.log(this.jNezet.getMegjLista());
    }

    getJLista(){
        return this.#jLista;
    }
}