import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { getAuth } from "firebase/auth";
const DeleteTask = async (board: any, table: any, task: any) => {
  const auth = getAuth();
  const user:any = auth.currentUser;
  await deleteDoc(doc(db, "users",user.uid,"boards", board.id, "tables", table, "tasks", task));
};
export default DeleteTask;
