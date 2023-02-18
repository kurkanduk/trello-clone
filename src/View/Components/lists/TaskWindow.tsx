import "./taskWindow.scss";

const TaskWindow = (props: { dat: any }) => {
  const data = {
    name: "Помыть кота",
    description:
      "Мыть кота очень хорошо, с шампунем, наверное)) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, maxime. Atque ab quam ad maiores doloribus, cum iusto neque ut fugit repellendus illo magnam dignissimos obcaecati veniam qui asperiores sunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, maxime. Atque ab quam ad maiores doloribus, cum iusto neque ut fugit repellendus illo magnam dignissimos obcaecati veniam qui asperiores sunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, maxime. Atque ab quam ad maiores doloribus, cum iusto neque ut fugit repellendus illo magnam dignissimos obcaecati veniam qui asperiores sunt!",
    column: "Задачи",
  };
  return (
    <div className="tw-container">
      <div className="tw-bg">
        <div className="tw-about-container">
          <div className="tw-title-bg">
            <h1 className="tw-title">{data.name}</h1>
            <h2 className="tw-column">in column {data.column}</h2>
          </div>
          <div className="tw-description-container">
            <h1 className="tw-description-title">Description</h1>
            <span className="tw-description">{data.description}</span>
          </div>
        </div>
        <div className="tw-button-container"></div>
      </div>
    </div>
  );
};
export default TaskWindow;
