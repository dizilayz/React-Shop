import { makeAutoObservable } from "mobx"

export default class Order {
    fields = orderForm();
    lastCacheData = null;
    

    get name() {
        let orderData = {};
        this.fields.forEach(field => {
            orderData[field.name] = field.value
        })
        return orderData.name;
    }


    get valid() {
        return this.fields.every(f => f.valid)
    }

    update = (name, value) => {
        this.fields.map(field => {
            if(field.name === name) {
                field.value = value.trim();
                field.valid = field.pattern.test(value);
            }
        })
    }

    send() {
        this.lastCacheData = this.rootstore.cartStore.total;
        this.rootstore.cartStore.clean();
        this.rootstore.cartStore.load();
    }

    constructor(rootstore) {
        makeAutoObservable(this);
        this.rootstore = rootstore
    }


}

function orderForm() {
    return [
        { name: "email", label: "Email", value: "", valid: false, pattern: /^.+@.+$/ },
        { name: "phone", label: "Phone", value: "", valid: false, pattern: /^\d{5,12}.+$/ },
        { name: "name", label: "Name", value: "", valid: false, pattern: /^.{2,}$/ },
    ]
}
