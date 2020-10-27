export default class Likes {
        constructor(){
            this.likes = [];
        }

    addLike(id, title, author, img){
        const like = { id, title, author, img };
        this.likes.push(like);
        return like;
    };

    deleteLike(id) {
        //need anon fun to get id from object
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
    }

    idLiked(id) {
        //is recipe in likes array? if not findIndex returns -1
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }
}