import { jatekLista } from "../adat.js";
export default class JatekModell{
    #lista = [];
    #kosarLista = [];

    constructor(){
        jatekLista.forEach((elem, index) => {
            this.#lista[index] = elem;
            console.log(this.#lista[index]);
        });
    }

    getLista(){
        return this.#lista;
    }

    getKosarLista(){
        return this.#kosarLista;
    }

    kosarbaTesz(termek){
        if(termek.raktaron > 0){
            this.#kosarLista.push(termek);
            termek.raktaron -= 1;
        }
        else{
            //console.log("Hiba! Nincs készleten.")
        }
    }

    
}