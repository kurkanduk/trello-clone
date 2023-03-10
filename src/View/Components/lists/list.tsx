import "./list.scss";
import AddTask from "./addTask";
import getTasks from "../../DbRequests/GetTasks";
import { useDrop } from "react-dnd";

import { useParams } from "react-router";
import DeleteTask from "../../DbRequests/DeleteTask";
import deleteTable from "../../DbRequests/DeleteTable";
import Task from "./task";
import addTask from "../../DbRequests/AddTaskToDb";

const List = (data: any) => {
  let tasks = getTasks(data.id);
  const board = useParams();
  const deleteTableConfirmation = () => {
    if (window.confirm("This will delete table! Are you sure?")) {
      deleteTable(board, data.id, tasks.data);
    }
  };
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "task",
      drop: (e: any) => {
        addTask(board, data, e.data.name);
        DeleteTask(board, e.data.TId, e.data.id);
      },
      collect: (monitor: any) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  return (
    <>
      <div className="list-bg" ref={drop}>
        <div className="delete-table" onClick={deleteTableConfirmation}>
          ✖
        </div>

        <h1 className="title">{data.title}</h1>
        <div className="tasks-container">
          {tasks.data.map((e: any) => {
            return (
              <Task
                boardId={board}
                taskId={e.id}
                tableId={data.id}
                data={e.data}
                key={e.id}
              ></Task>
            );
          })}
        </div>
        <AddTask id={data.id}></AddTask>
      </div>
    </>
  );
};
export default List;
