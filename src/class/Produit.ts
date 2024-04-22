import { ProduitModel } from "../models/Produit.model.js";

export class Produit {
  private produit: ProduitModel;

  constructor(produit: ProduitModel) {
    this.produit = produit;
    this.prixHT = produit.prixHT;
    this.tauxTVA = produit.tauxTVA;
  }

  public get id(): string {
    if (this.produit.id) return this.produit.id;
    throw new Error("pas d'id");
  }

  public get nom(): string {
    return this.produit.nom;
  }

  public get prixHT(): number {
    return this.produit.prixHT;
  }

  public set prixHT(value: number) {
    if (value < 0 || value > 1000) throw new Error("le prixHT doit etre comprie entre 0 et 1000");
    ;
    this.produit.prixHT = value;
  }

  public get tauxTVA(): number {
    return this.produit.tauxTVA;
  }

  public set tauxTVA(value: number) {
    if (value != 5.5 && value != 10 && value != 20) throw new Error("le tauxTVA doit etre de 5.5, 10 et 20");
    ;
    this.produit.tauxTVA = value; 
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
