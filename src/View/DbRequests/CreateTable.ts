import { db } from "../../firebase/initFirebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const createTable = async (boardId: any, tableName: string) => {
  const auth = getAuth();
  const user: any = auth.currentUser;
  await addDoc(collection(db, "users", user.uid, "boards", boardId, "tables"), {
    name: tableName,
  });
};
export default createTable;
