export class Produit {
    constructor(produit) {
        this.produit = produit;
        this.prixHT = produit.prixHT;
        this.tauxTVA = produit.tauxTVA;
    }
    get id() {
        if (this.produit.id)
            return this.produit.id;
        throw new Error("pas d'id");
    }
    get nom() {
        return this.produit.nom;
    }
    get prixHT() {
        return this.produit.prixHT;
    }
    set prixHT(value) {
        if (value < 0 || value > 1000)
            throw new Error("le prixHT doit etre comprie entre 0 et 1000");
        ;
        this.produit.prixHT = value;
    }
    get tauxTVA() {
        return this.produit.tauxTVA;
    }
    set tauxTVA(value) {
        if (value != 5.5 && value != 10 && value != 20)
            throw new Error("le tauxTVA doit etre de 5.5, 10 et 20");
        ;
        this.produit.tauxTVA = value;
    }
    getPrixTTC() {
        const priceTTC = this.produit.prixHT * (1 + this.produit.tauxTVA / 100);
        return priceTTC;
    }
    getDescription() {
        const priceTVA = this.getPrixTTC() - this.produit.prixHT;
        console.log(`description: \nNom: ${this.produit.nom} (${this.produit.id}) ${this.getPrixTTC()}EUR (dont TVA: ${priceTVA}EUR)`);
    }
}
