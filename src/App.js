import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {
  const [showAddTask, setShowAddTask]= useState 
  (true)
  const [tasks, setTasks] = useState( [
    {
        id:1,
        text: 'Complete Decent Med Python Project',
        month: 'March',
        reminder:false,
    },
    {
        id:2,
        text: 'Create ERC20 Token DMED',
        month:'April',
        reminder:false,
    },
    {
        id:3,
        text:'Finish Ivan on Tech Academy and complete portfolio',
        month:'May',
        reminder:true,
    },
    {
        id:4,
        text:'Get Blockchain position and begin search for needed developers(C++/EOS, Solidity, JavaScript, Python)',
        month:'June',
        reminder:true,
    },
])
const addTask = (task) => {
  const id = Math.floor(Math.random() *
 10000) + 1
 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task ))
} 
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle= {toggleReminder}
      
      />
      </header>
    </div> 
  );
}

export default App;
