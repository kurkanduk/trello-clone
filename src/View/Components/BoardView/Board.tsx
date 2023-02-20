import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./Boards.scss";

import getTables from "../../DbRequests/GetTables";
import List from "../lists/list";
import AddTable from "./AddTable";
import { Form } from "../Form/Form";
import createTable from "../../DbRequests/CreateTable";

type id = {
  id: string;
};

const Board = () => {
  const { id } = useParams();
  const [tables, setTables] = useState<any>([]);
  const { data } = getTables(id);
  const [openForm, setOpenForm] = useState<boolean>(false);

  useEffect(() => {
    setTables(data);
  }, [data]);
  useEffect(() => {}, [tables]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg">
        {tables.map((e: any, i: number) => {
          return <List id={e.id} title={e.data.name}></List>;
        })}
        <AddTable setAdd={setOpenForm}></AddTable>
        {openForm ? (
          <Form
            setShow={setOpenForm}
            sendData={(e: string) => {
              createTable(id, e);
            }}
          ></Form>
        ) : (
          <></>
        )}
      </div>
    </DndProvider>
  );
};
export default Board;
