import firebase from "firebase";

export interface Entry {
    id: string;
    date: string;
    title: string;
    pictureUrl: string;
    description: string;
}

export function toEntry(doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Entry {
    return {id: doc.id, ...doc.data()} as Entry;
}