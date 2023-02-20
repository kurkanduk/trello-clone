import { db } from "../../firebase/initFirebase";
import { addDoc, doc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const addTask = async (boardId: any, tableId: any, taskText: string) => {
  const auth = getAuth();
  const user: any = auth.currentUser;
  await addDoc(
    collection(
      db,
      "users",
      user.uid,
      "boards",
      boardId.id,
      "tables",
      tableId.id,
      "tasks"
    ),
    {
      text: taskText,
    }
  );
};
export default addTask;
