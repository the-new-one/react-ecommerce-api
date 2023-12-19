import { Module, DynamicModule } from '@nestjs/common';
import { Firestore, Settings } from '@google-cloud/firestore';
import {
  FirestoreDatabaseProvider,
  FirestoreOptionsProvider,
  FirestoreCollectionProviders,
} from './firestore.providers';