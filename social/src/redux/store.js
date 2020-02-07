//Create store instead state
let store = {
    _state : {
        profilePage : {
            dataPost : [
                {
                id:1,
                textpost:"fhfkdf;lgfjhfkl",
                likecount:2
                },
                {
                id:2,
                textpost:"fhfkdf;lgfdhjjhjfjhfkl",
                likecount:2
                },
                {
                id:3,
                textpost:"fhfkdf;lgffkgfghfjjhfkl",
                likecount:67
                },
                {
                    id:4,
                    textpost:"aaaaaaaaaaaaaaaaaaaaa",
                    likecount:6777777
                    }
            ],
            newTextPost : "test first text"
        },
        messagePage:{
            dialogData : [
                {
                    id:1,
                    name:"John"
                },
                {
                    id:2,
                    name:"Mary"
                },
                {
                    id:3,
                    name:"Frank"
                },
                {
                    id:4,
                    name:"Herbert"
                },
                {
                    id:5,
                    name:"Rene"
                },
                {
                    id:6,
                    name:"Herchart"
                }
            ],
            messagedata : [
                {
                    id:1,
                    mestext:"Call me!!!"
                },
                {
                    id:2,
                    mestext:"Call me, please!!!"
                }
            ]
        }
    },
    getState(){
        debugger;
        return this._state;
    },
    _rerenderEntire() {
        console.log('State was changed');
    },
    addPost() {
        debugger;
        let newPost = {
            id:5,
            
            textpost:this._state.profilePage.newTextPost,
            likecount:25
        }
    
        this._state.profilePage.dataPost.push(newPost);
        this._state.profilePage.newTextPost = "";
        this._rerenderEntire(this._state);
    },
    changePostTextArea(text){
        
        this._state.profilePage.newTextPost = text;
        this._rerenderEntire(this._state);
    },
    subscribe(observer){
        // debugger;
        this._rerenderEntire = observer; //using pattern observer
    }
}




//add vvalue from changed state without params






export default store;
