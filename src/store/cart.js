import { makeAutoObservable, runInAction } from "mobx";

const BASEURL = 'https://faceprog.ru/reactcourseapi/cart/';

export default class Cart {
    items = [];
    #token = null;
    idInProcess = [];



    get itemsDetailed() {
        return this.items.map(item => {
            let detailed = this.rootstore.products.item(item.id);
            return { ...detailed, ...item }
        })
    }

    inCart = (id) => {
        return this.items.some(item => item.id === id)
    }

    inProcess = (id) => {
        return this.idInProcess.some(elem => elem == id)
    }




    get total() {
        return this.itemsDetailed.reduce((sum, item) => sum + item.cnt * item.price, 0)
    }

    change = async (id, cnt) => {
        let item = this.items.find(item => item.id === id);

        if (item !== undefined) {
            let details = this.itemsDetailed.find(pr => pr.id === id);
            cnt = Math.max(1, Math.min(details.rest, cnt));
            let res = await this.api.change(this.#token, id, cnt);
                runInAction(() => {
                    if(res) {
                        item.cnt = cnt
                    }
                })

        }

    }

    remove = async (id) => {
        if (this.inCart(id) && !this.inProcess(id)) {
            this.idInProcess.push(id);
            let res = await this.api.remove(this.#token, id);
            runInAction(() => {
                if (res) {
                    this.items = this.items.filter(item => item.id != id);
                }
                this.idInProcess = this.idInProcess.filter(elem => elem !== id)
            })

        }
    }

    add = async (id) => {
        if (!this.inCart(id) && !this.inProcess(id)) {
            this.idInProcess.push(id);
            let res = await this.api.add(this.#token, id);

            runInAction(() => {
                if (res) {
                    this.items.push({ id, cnt: 1 });
                }
                this.idInProcess = this.idInProcess.filter(elem => elem !== id)
            })
        }
    }

    async load() {
        let curToken = this.rootstore.storage.getItem('CART_TOKEN')
        let { cart, token, needUpdate } = await this.api.load(curToken);
        if (needUpdate) {
            this.rootstore.storage.setItem('CART_TOKEN', token);
        }
        runInAction(() => {
            this.items = cart;
            this.#token = token
        })
    }

    clean = async () => {
        let response = await fetch(`${BASEURL}clean.php?token=${this.#token}`);
        let res = await response.json();

        if (res) {
            runInAction(() => {
                this.items = [];
            })
        }
    }


    constructor(rootstore) {
        makeAutoObservable(this);
        this.rootstore = rootstore;
        this.api = this.rootstore.api.cart
    }
}



/*  
    constructor() {
        this.products = observable(this.products);
        this.total = computed(this.total);
        this.change = action(this.change);
        this.remove = action(this.remove);
    }
*/