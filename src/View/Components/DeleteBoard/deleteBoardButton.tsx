import { deleteBoard } from "./deleteBoard";
import "./deleteButton.scss";
const DeleteBoardButton = (id: any) => {
  let del = () => {
    deleteBoard(id);
  };
  return (
    <button className="delete" onClick={del}>
      delete
    </button>
  );
};
export default DeleteBoardButton;
