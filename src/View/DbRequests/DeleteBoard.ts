import { db } from "../../firebase/initFirebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const deleteBoard = async (id: any) => {
  const auth = getAuth();
  const user: any = auth.currentUser;
  let docRef = doc(db, "users", user.uid, "boards", id.id);
  deleteDoc(docRef);
};
