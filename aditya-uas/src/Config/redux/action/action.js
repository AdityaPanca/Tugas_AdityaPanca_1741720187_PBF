import firebase,{database} from '../../firebase'
import "../reducer/reducer"

export const actionUsername = (dispatch) => {
        setTimeout(() => {
        return dispatch ({type: 'CHANGE_USER', value: 'Aditya Panca Putra' })
    },2000)
}

export const registerUserAPI = (data) => (dispatch) =>{
    dispatch({type:'CHANGE_LOADING',value: true})
    return(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(res =>{
            console.log('succes: ',res);
            dispatch({type:'CHANGE_LOADING',value: false})

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
            dispatch({type:'CHANGE_LOADING',value: false})
          })
    )
}

export const LoginUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve,reject)=>{
        dispatch({type:'CHANGE_LOADING',value: true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(res =>{
            console.log('succes: ',res);
            const dataUser = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified,
                refrehToken: res.user.refreshToken
            }
            dispatch({type:'CHANGE_LOADING',value: false})
            dispatch({type:'CHANGE_ISLOGIN',value: true})
            dispatch({type:'CHANGE_USER',value: dataUser})
            resolve(dataUser)

        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
            dispatch({type:'CHANGE_LOADING',value: false})
            dispatch({type:'CHANGE_ISLOGIN',value: false})
            // dispatch({type:'CHANGE_USER',value: true})
            reject(false)
          })
    })
    
}

export const addDataToAPI = (data) => (dispatch) =>{
    database.ref('notes/'+ data.userId).push({
        title: data.title,
        content: data.content,
        date: data.date
    })
}

export const getDataFromAPI = (userId) => (dispatch) => {
    const urlNotes = firebase.database().ref('notes/' + userId);
    return new Promise((resolve)=>{
        urlNotes.on('value', function(snapshot) {
            console.log('Get Data: ',snapshot.val());
            const data = [];
            Object.keys(snapshot.val()).map(key => {
                data.push({
                id: key,
                data: snapshot.val()[key]
                })
            });

            dispatch({type:'SET_NOTES',value: data})
            resolve(snapshot.val())
        });
    })
}

export const updateDataFromAPI = (data) => (dispatch) => {
    const urlNotes = firebase.database().ref( `notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject)=>{
        urlNotes.set({
            title: data.title,
            content: data.content,
            date: data.date
        },
            (err) => {
            if(err){
                reject(false);
            }
            else{
                resolve(true)
            }
        });

    })
}

export const deleteDataFromAPI = (data) => (dispatch) => {
    const urlNotes = firebase.database().ref( `notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject)=>{
        urlNotes.remove();

    })
}