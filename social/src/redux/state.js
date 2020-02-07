// import { rerenderEntire } from './render';
let rerenderEntire = () => {
    console.log('State was changed');
}
let state = {
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
}
//Create method add at state with export
// export let addPost = (newPostText) => {
//     // debugger;
//     let newPost = {
//         id:5,
//         textpost:newPostText,
//         likecount:25
//     }

//     state.profilePage.dataPost.push(newPost);
//     // state.profilePage.newTextPost = "";
//     rerenderEntire(state);
    

// }
//add vvalue from changed state without params
export const addPost = () => {
    // debugger;
    let newPost = {
        id:5,
        textpost:state.profilePage.newTextPost,
        likecount:25
    }

    state.profilePage.dataPost.push(newPost);
    state.profilePage.newTextPost = "";
    rerenderEntire(state);
    

}
export const changePostTextArea = (text) => {
    // debugger;
    state.profilePage.newTextPost = text;
    rerenderEntire(state);
}
// export let textNull = () => {
//     state.profilePage.newTextPost = "";
//     rerenderEntire(state);
// }

export const subscribe = (observer) => {
    // debugger;
    rerenderEntire = observer; //using pattern observer
}

export default state;
