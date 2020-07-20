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

export type stateType = {
    profilePage:profilePageType
    dialogsPage:dialogsPageType
    navPage: navPageType
}

export type storeType = {
    _state: stateType
    getState:() => stateType
    addPost:() => void
    updatePost:(newPostValue:string | number) => void
    addMessage:() => void
    updateMessage: (newMessageValue:string | number) => void
    sibscribe:(observer:any) => void
    _renderAppTree: (state:stateType) => void
}



export const store:storeType = {
    _state: {
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
    },
    _renderAppTree(){
        console.log('app was rendered')
    },
    getState(){
        return this._state
    },
    addPost() {
        let newPostValue = this._state.profilePage.newPost
        let newPost = {id: 5, message: newPostValue}

        this._state.profilePage.posts.push(newPost)
        this._renderAppTree(this._state);
        this._state.profilePage.newPost = '';
    },
    updatePost(newPostValue:string | number){
        this._state.profilePage.newPost = newPostValue;
        this._renderAppTree(this._state);
    },
    addMessage() {
        let newMessageValue = this._state.dialogsPage.newMessage;

        let newMessage = {id: 5, message: newMessageValue}

        this._state.dialogsPage.messages.push(newMessage)
        this._renderAppTree(this._state);
        this._state.dialogsPage.newMessage = '';
    },
    updateMessage(newMessageValue:string | number){
        this._state.dialogsPage.newMessage = newMessageValue;
        this._renderAppTree(this._state);
    },
    sibscribe(observer:any){
        this._renderAppTree = observer
    },
}