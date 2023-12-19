import { Todo } from "./controllers/todo/entities/todo.entity";

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [Todo.collectionName];