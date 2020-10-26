import uniqid from 'uniqid';

export default class List {
    constructor() {
        //all elements in list will be stored in items array
        this.items = [];
    }

    addItem (count, unit, ingredient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        console.log(item);
        return item;
    }

    deleteItem (id){
        const index = this.items.findIndex(el => el.id === id);
        //splice mutates array, slice does not
        // start, how many to delete -> returns array with items not removed
        // [2,4,8] splice(1,2) -> returns [4,8], original array is [2]
        // [2,4,8] slice(1,2) -> returns 4 , origianl array is [2,4,8]
        this.items.splice(index,1);
    }

    updateCount(id, newCount){
        this.items.find(el => el.id === id).count = newCount;

    }
}