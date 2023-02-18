import "./AddTable.scss";
const AddTable = (par: any) => {
  let clickHandler = () => {
    par.setAdd(true);
  };
  return (
    <div className="add-table-bg" onClick={clickHandler}>
      <h1 className="add-table-title">+ add new table</h1>
    </div>
  );
};
export default AddTable;
