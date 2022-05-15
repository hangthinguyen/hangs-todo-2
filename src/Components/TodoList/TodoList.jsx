import NewTaskButton from '../NewTaskButton/NewTaskButton.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './TodoList.css';



export default function TodoList() {
    const [Checked, setChecked] = useState(false);    
    const handleChecked = () => {    
        setChecked(!Checked)
    }    
    return (
        <div className='todo-list'>
            <Checkbox onClick={handleChecked} checked={Checked}/>
            <FontAwesomeIcon id='trashcan' icon={faTrashCan} />
            <NewTaskButton />
        </div>
    )
}