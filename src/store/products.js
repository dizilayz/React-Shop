import { makeAutoObservable, runInAction } from "mobx";

export default class Products {
    productsArr = [];

    get item() {
       return id => this.productsArr.find(product => product.id == id);
    }

    async load() {
        let products = await this.api.all();
       
       // mutation
       runInAction(() => {
        this.productsArr = products;
       })
    }

    constructor(rootstore) {
        makeAutoObservable(this);
        this.rootstore = rootstore;
        this.api = this.rootstore.api.products;
    }
}


