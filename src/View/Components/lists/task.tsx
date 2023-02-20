import { ReactComponent as ReactLogo } from "./trash.svg";
import { ReactComponent as ReactLogo2 } from "./pen.svg";
import DeleteTask from "../../DbRequests/DeleteTask";
import { useDrag } from "react-dnd";
import TaskWindow from "./TaskWindow";

let Task = (props: { data: any; boardId: any; tableId: any; taskId: any }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {
      data: { name: props.data.text, id: props.taskId, TId: props.tableId },
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const deleteHandler = (tableId: any, taskId: any) => {
    DeleteTask(props.boardId, tableId, taskId);
  };
  return (
    <div className="taskContainer" draggable="true" ref={drag}>
      {/* <TaskWindow dat=""></TaskWindow> */}
      <h1 className="taskTitle">{props.data.text}</h1>
      <div className="bottom-bar">
        <div
          className="delete-task"
          onClick={() => {
            deleteHandler(props.tableId, props.taskId);
          }}
        >
          <ReactLogo className="buttons"></ReactLogo>
        </div>
        <div className="delete-task">
          <ReactLogo2 className="buttons"></ReactLogo2>
        </div>
      </div>
    </div>
  );
};
export default Task;
