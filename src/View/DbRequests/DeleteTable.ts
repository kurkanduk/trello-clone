import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/initFirebase";
import { getAuth } from "firebase/auth";

import DeleteTask from "./DeleteTask";

const DeleteTable = async (boardId: any, tableId: any, tasks: any) => {
  const auth = getAuth();
  const user: any = auth.currentUser;
  tasks.map(async (e: any) => {
    DeleteTask(boardId, tableId, e.id);
  });
  await deleteDoc(
    doc(db, "users", user.uid, "boards", boardId.id, "tables", tableId)
  );
};
export default DeleteTable;
