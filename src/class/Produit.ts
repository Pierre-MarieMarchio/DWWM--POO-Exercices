import { ProduitModel } from "../models/Produit.model.js";

export class Produit {
  produit: ProduitModel;

  constructor(produit: ProduitModel) {
    this.produit = produit;
  }

  getPrixTTC(): number {
    const priceTTC = this.produit.prixHT * (1 + this.produit.tauxTVA / 100);

    return priceTTC;
  }

  getDescription(): void {
    const priceTVA = this.getPrixTTC() - this.produit.prixHT;

    console.log(
      `description: \nNom: ${this.produit.nom} (${this.produit.id}) ${this.getPrixTTC()}EUR (dont TVA: ${priceTVA}EUR)`
    );
  }
}
