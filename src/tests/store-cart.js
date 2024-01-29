import {Cart} from '../store/cart';

let cartStore = new Cart();

console.log(cartStore.total === 54000)
cartStore.remove(100);
console.log(cartStore.total === 54000)