import { DocumentReference } from '@angular/fire/firestore';

export interface DocumentMeta {
	createdBy?: string;
	createdDate?: firebase.default.firestore.Timestamp;
	docId?: string;
	env?: string;
	fl_id?: string;
	lastModifiedBy?: string;
	lastModifiedDate?: firebase.default.firestore.Timestamp;
	locale?: string;
	schema?: string;
	schemaRef?: DocumentReference;
	schemaType?: string;
}

export interface Document {
	id?: string;
	order?: number;
	_fl_meta_?: DocumentMeta;
}
