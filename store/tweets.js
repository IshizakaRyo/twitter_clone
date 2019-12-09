import firebase from '~/plugins/firebase'
import { firestoreAction} from 'vuexfire'

const db = firebase.firestore()
const tweetsRef = db.collection('tweets')

export const state = () => ({
    tweets: []
})

export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('tweets', tweetsRef)
    }),
    add: firestoreAction((contex, name) => {
        if(name.trim()) {
            tweetsRef.add({
                name: name,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    remove: firestoreAction((contex, id) => {
        tweetsRef.doc(id).delete()
    })
}