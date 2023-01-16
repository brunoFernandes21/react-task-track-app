import React, {useState} from "react";

const AddTask = (props) => {
    const {addTask, setShowForm} = props
    const [formData, setFormData] = useState(
        {title: '', day: '', reminder: false}
    )
    // console.log(formData)

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevSatate => {
            return {
                ...prevSatate,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(formData)
        // setShowForm(false)
        setFormData(
            {title: '', day: '', reminder: false}
        )
    }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input className="input" type="text" name="title" value={formData.title} placeholder="Add Task" onChange={handleChange}/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input className="input" type="text" name="day" value={formData.day} placeholder="Add Day & Time" onChange={handleChange}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input className="input" type="checkbox" checked={formData.reminder} name="reminder" onChange={handleChange}/>
      </div>
      <button className="btn btn-block">Save Task</button>
    </form>
  );
};

export default AddTask;
