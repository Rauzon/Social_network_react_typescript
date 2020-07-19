export type dialogsNamesType = {
    id: number,
    name: string,
    path: string
}
export type dialogsMessagesType = {
    id: number,
    message: string | number
}
export type profilePostsType = {
    id: number,
    message: string | number
}
export type navTitlesType = {
    id: number,
    title: string,
    path: string
}

export type profilePageType = {
    posts: Array<profilePostsType>
    newPost : string | number
}
export type dialogsPageType = {
    names:Array<dialogsNamesType>
    messages:Array<dialogsMessagesType>
    newMessage: number | string
}
export type navPageType = {
    navTitles: Array<navTitlesType>
}

export type storeType = {
    profilePage:profilePageType
    dialogsPage:dialogsPageType
    navPage: navPageType
}


let renderAppTree = (store: storeType) => {
    console.log('app was rendered')
}

export const store:storeType = {
    profilePage:{
        posts:[
            {id: 1, message: "Hey girls"},
            {id: 2, message: "Hey guys"}
        ],
        newPost:''
    },
    dialogsPage:{
        names: [
            {id: 1, name: 'Marat', path: '/dialogs/1'},
            {id: 2, name: 'Anton', path: '/dialogs/2'},
            {id: 3, name: 'Arkasha', path: '/dialogs/3'},
            {id: 4, name: 'Tolik', path: '/dialogs/4'}
        ],
        messages : [
            {id: 1, message: 'Hey man!'},
            {id: 2, message: 'How is it going?'},
            {id: 3, message: 'You forgot about my birthday(('},
            {id: 4, message: 'I want to break up with you, sorry'}
        ],
        newMessage:''
    },
    navPage:{
        navTitles: [
            {id: 1, title: 'Profile', path: '/profile'},
            {id: 2, title: 'Dialogs', path: '/dialogs'},
            {id: 3, title: 'Users', path: '/users'},
            {id: 4, title: 'News', path: '/news'},
            {id: 5, title: 'Settings', path: '/settings'}
        ]
    }
}

//add post (ProfilePage)
export const addPost = () => {
    let newPostValue = store.profilePage.newPost
    let newPost = {id: 5, message: newPostValue}

    store.profilePage.posts.push(newPost)
    renderAppTree(store);
    store.profilePage.newPost = '';
}

export const updatePost = (newPostValue:string | number) => {
    store.profilePage.newPost = newPostValue;
    renderAppTree(store);
}


// add message (dialogPage)
export const addMessage = () => {
    let newMessageValue = store.dialogsPage.newMessage;

    let newMessage = {id: 5, message: newMessageValue}

    store.dialogsPage.messages.push(newMessage)
    renderAppTree(store);
    store.dialogsPage.newMessage = '';
}

export const updateMessage = (newMessageValue:string | number) => {
    store.dialogsPage.newMessage = newMessageValue;
    renderAppTree(store);
}



export const sibscribe = (observer:any) => {
    renderAppTree = observer
}