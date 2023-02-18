import { useParams } from "react-router";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase/initFirebase";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const GetTables = (id: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const auth = getAuth();
  const user:any = auth.currentUser;
  let dataGet = async (id: any) => {
    const q = query(collection(db, "users", user.uid, "boards", id, "tables"));
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
    dataGet(id);
    setLoading(false);
  }, [id]);
  return {
    data,
    loading,
    error,
  };
};
export default GetTables;
