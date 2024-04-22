export class Produit {
    constructor(produit) {
        this.produit = produit;
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
