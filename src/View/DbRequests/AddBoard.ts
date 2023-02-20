import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/initFirebase";

// Add a new document with a generated id

// later...
let addBoard = async (data: any) => {
  const auth = getAuth();
  const user: any = auth.currentUser;
  const { destruct } = data;
  const name = {
    name: data,
  };
  const docRef = await addDoc(
    collection(db, "users", user.uid, "boards"),
    name
  );
  const setdo = await addDoc(
    collection(db, "users", user.uid, "boards", docRef.id, "tables"),
    {
      name: "do",
    }
  );
  const setdid = await addDoc(
    collection(db, "users", user.uid, "boards", docRef.id, "tables"),
    {
      name: "did",
    }
  );
  const setdoing = await addDoc(
    collection(db, "users", user.uid, "boards", docRef.id, "tables"),
    {
      name: "doing",
    }
  );
};
export default addBoard;
