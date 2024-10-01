export default class Jatek{
    #megj_Lista = [];

    constructor(){
        // lista elemeit megjelenítjük a feladat alapján
        //this.jLista = lista; // Lehet nincs értelme itt publikussá tenni a listát, de legalább többi helyen privát :/ - Bonyolultság miatt most máshogy csinálom
        //console.log(this.jLista);
        this.ebben_megj = $('.tarolo');
        /*this.megj_Lista_feltolt(this.jLista);
        this.lista_megjelenit(this.ebben_megj, this.getMegjLista());*/
    }

    megj_Lista_feltolt(jLista){
        const LI = this.getMegjLista();
        let txt = "";
        jLista.forEach((elem, index) => {
            txt = `<div id="${index}">
                <a href="${elem.kepLink}">
            </div>`;
            LI.push(txt);
        });
    }

    lista_megjelenit(ebben, ezt){
        ezt.forEach((elem, index) => {
            ebben.append(elem);
        });
    }

    getEbbenMegj(){
        return this.ebben_megj;
    }

    getMegjLista(){
        return this.#megj_Lista;
    }



}