const ListTask = props =>{
  const {listTasks, setNewListTask} = props;
  
  const checkbox = listTasks.map(i => (<checkbox key={i.id} data={i}/>));

  return(
    <div className="list-checkboxs">
      {listTasks.length ? checkbox : "No tasks yet"}
      {ListTask.length ? (
        <p>
          <button className="button-delete-all">
            Delete all completed tasks
          </button>
        </p>
      ): null};
    </div>
  );
}

export default ListTasks;