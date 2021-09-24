import { db } from "../config/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export class LeadService {
    constructor() {
        this.addLead = this.addLead.bind(this);
    }

    async addLead(data: any) {
        try {
          const docRef = await addDoc(collection(db, "leads"), {
            first: data.firstName,
            email: data.email,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    }
}