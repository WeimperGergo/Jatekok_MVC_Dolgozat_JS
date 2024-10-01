export default class JatekNezet{
    #megj_Lista = [];

    constructor(){
        // lista elemeit megjelenítjük a feladat alapján
        //this.jLista = lista; // Lehet nincs értelme itt publikussá tenni a listát, de legalább többi helyen privát :/ - Bonyolultság miatt most máshogy csinálom
        // console.log(this.jLista);
        this.ebben_megj = $('#tarolo');
        /*this.megj_Lista_feltolt(this.jLista);
        this.lista_megjelenit(this.ebben_megj, this.getMegjLista());*/
    }

    megj_Lista_feltolt(jLista){
        const LI = this.getMegjLista();
        let txt = "";
        jLista.forEach((elem, index) => {
            txt = `
            <div id="${index}" class="card col-lg-4" style="width:400px; margin: auto">
                <img src="${elem.kepLink}" class="card-img-top" style="height:400px; width:300px; margin: auto">
                <div class="card-body">
                    <h4 class="card-title">${elem.cim}</h4>
                    <p class="card-text">Raktáron: ${elem.raktaron}</p>
                    <p class="card-text">${elem.ar} Ft</p><br>
                    <button class="btn btn-primary" style="float: right">Kosárba</button>
                </div>
            </div>`;
            LI.push(txt);
        });
    }

    lista_megjelenit(ebben, ezt){
        ezt.forEach(elem => {
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