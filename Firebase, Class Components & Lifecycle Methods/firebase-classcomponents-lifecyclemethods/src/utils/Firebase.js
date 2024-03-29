import DB from "../index";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	onSnapshot,
	query,
	where,
	getDocs,
	orderBy,
	updateDoc,
	arrayUnion,
	arrayRemove,
	increment,
	deleteDoc,
	limit,
	deleteField,
} from "firebase/firestore";

let unsubscribe;

export const addNewDoc = async (collectionName, object) => {
	try {
		const collectionRef = collection(DB, collectionName);
		const newDocumentRef = await addDoc(collectionRef, object);
		let newDocumentPath = newDocumentRef.path;
		let newDocumentID = newDocumentRef.id;
		let output = `Document Created at the PATH=[${newDocumentPath}] & ID=[${newDocumentID}]`;
		console.log(output);
	} catch (error) {
		console.log("Error:", error);
	}
};

export const getOneDoc = async (collectionName, documentID) => {
	try {
		const documentRef = doc(DB, collectionName, documentID);
		const documentSnapshot = await getDoc(documentRef);
		if (documentSnapshot.exists()) {
			const Data = {};
			const documentData = documentSnapshot.data();
			const documentID = documentSnapshot.id;
			Data[documentID] = documentData;
			return Data;
		} else {
			console.log("No such Document exists!");
			return {};
		}
	} catch (error) {
		console.log("Error:", error);
	}
};

export const getAllDocs = async (collectionName) => {
	try {
		const collectionRef = collection(DB, collectionName);
		const querySnapshot = await getDocs(collectionRef);
		const DataArray = [];
		querySnapshot?.forEach((doc) => {
			const DataObject = {};
			const documentID = doc.id;
			const documentData = doc.data();
			DataObject[documentID] = documentData;
			DataArray.push(DataObject);
		});
		return DataArray;
	} catch (error) {
		console.log("Error:", error);
	}
};

export const getQueryDocs = async (collectionName) => {
	try {
		const collectionRef = collection(DB, collectionName);
		const queryRef = query(
			collectionRef,
			where("id", "==", 5)
			// orderBy("title"),
			// orderBy("brands", "desc"),
			// limit(2)
		);
		const querySnapshot = await getDocs(queryRef);
		const DataArray = [];
		querySnapshot?.forEach((doc) => {
			const DataObject = {};
			const documentID = doc.id;
			const documentData = doc.data();
			DataObject[documentID] = documentData;
			DataArray.push(DataObject);
		});
		return DataArray;
	} catch (error) {
		console.log("Error:", error);
	}
};

export const updateOneDoc = async (collectionName, documentID) => {
	try {
		const documentRef = doc(DB, collectionName, documentID);
		await updateDoc(documentRef, {
			quantity: increment(1),
			id: increment(1),
			"favorites.color": "Red",
			brands: arrayUnion("huawei", "nokia"),
			brands: arrayRemove("oneplus", "nokia"),
			price: 5000,
		});
	} catch (error) {
		console.log("Error:", error);
	}
};

export const deleteOneDoc = async (collectionName, documentID) => {
	try {
		const documentRef = doc(DB, collectionName, documentID);
		await deleteDoc(documentRef);
	} catch (error) {
		console.log("Error:", error);
	}
};

export const deleteDocField = async (collectionName, documentID) => {
	try {
		const documentRef = doc(DB, collectionName, documentID);
		await updateDoc(documentRef, { image: deleteField() });
	} catch (error) {
		console.log("Error:", error);
	}
};

export const documentListener = (collectionName, documentID) => {
	try {
		const documentRef = doc(DB, collectionName, documentID);
		unsubscribe = onSnapshot(
			documentRef,
			(doc) => console.log(`Listening to the Document [${doc.id}]`),
			(error) => {
				console.log("Encountered an Error! Detaching the Listener...");
				console.log(error);
			}
		);
		return unsubscribe;
	} catch (error) {
		console.log("Error:", error);
	}
};

export const collectionListener = (collectionName) => {
	try {
		const collectionRef = collection(DB, collectionName);
		unsubscribe = onSnapshot(
			collectionRef,
			(snapshot) =>
				snapshot.forEach((doc) =>
					console.log(`Listening to the Document [${doc.id}]`)
				),
			(error) => {
				console.log("Encountered an Error! Detaching the Listener...");
				console.log(error);
			}
		);
		return unsubscribe;
	} catch (error) {
		console.log("Error:", error);
	}
};
