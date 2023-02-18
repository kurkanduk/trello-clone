import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebase/initFirebase";
import { collection, onSnapshot, query, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const GetTasks = (tableId: any) => {
  const boardId = useParams();
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  let dataGet = async (boardId: any, tableId: any) => {
    const auth = getAuth();
    const user:any = auth.currentUser;
    const q = query(
      collection(db, "users",user.uid,"boards", boardId.id, "tables", tableId, "tasks")
    );
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  useEffect(() => {
    setLoading(true);
    dataGet(boardId, tableId);
    setLoading(false);
  }, [tableId]);
  return {
    data,
    loading,
    error,
  };
};

export default GetTasks;
