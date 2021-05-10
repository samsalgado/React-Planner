import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [month, setMonth] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a task')
            return
        }
        onAdd({ text, month, reminder })

        
        setText('')
        setMonth('')
        setReminder(false)
        
 }

    return (
        <form className= 'add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'
            value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Month</label>
            <input type='text' placeholder='Add Month'
             value={month} onChange={(e) => setMonth(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
             checked={reminder}
             value={reminder} 
             onChange={(e) => setReminder(e.currentTarget.checked)} 
             />
        </div>
        <input type='submit' value='save task' 
        className='btn btn-block'
        />

        </form>
    )
}

export default AddTask
