import { getFirestore} from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function listaTarefa() {
    db.collection("tarefa")

}

export async function insereTarefa(tarefa) {

}

export async function modificaTarefa(tarefa) {

}

export async function removeTarefa(key) {

}