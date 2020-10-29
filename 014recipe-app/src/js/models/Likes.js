export default class Likes {
        constructor(){
            this.likes = [];
        }

    addLike(id, title, author, img){
        const like = { id, title, author, img };
        this.likes.push(like);

        //persist data to localStorage
        this.persistData();

        return like;
    };

    deleteLike(id) {
        //need anon fun to get id from object
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        //persist data to localStorage
        this.persistData();

    }

    isLiked(id) {
        //is recipe in likes array? if not findIndex returns -1
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        localStorage.setItem('likes',JSON.stringify(this.likes));
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('likes'));
        
        //restore likes from local storage
        if (storage) this.likes = storage;
    }
}