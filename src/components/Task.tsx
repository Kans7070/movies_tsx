import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {  useEffect, useRef, useState } from 'react'
import { ITaskProps } from '../utils/interface'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { iconStyle, inputStyle, taskContainerStyle } from '../utils/styles';

const Task = ({ todo,  handleOnDelete=null, handleOnDone=null,completed=false }: ITaskProps) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editValue, setEditValue] = useState(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleOnEditIconClick = () => {
        if (!edit) {
            setEdit(true)
        } else {
            setEdit(false)
        }
    }
    useEffect(() => {
        if (edit){
            inputRef.current && inputRef.current.focus()
            
        }else{
            inputRef.current && inputRef.current.blur()

        }
    }, [edit])
  
    

    const handleOnEnter= (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            todo.todo = editValue
            setEdit(false)

        }
    }
    return (
        <Box sx={taskContainerStyle} >
            {edit ?
                <input ref={inputRef} type="text" style={inputStyle} value={editValue} onChange={e => setEditValue(e.target.value)} onKeyDownCapture={handleOnEnter} />
                :
                <Typography variant='h5'>{todo.todo}</Typography>

            }
            {completed?
            <DeleteIcon color='error' style={iconStyle} onClick={() => {if(handleOnDelete) {handleOnDelete(todo.id)}}}/>
            :
            <Box alignItems='center' >
                
                <EditIcon color='primary' style={iconStyle} onClick={handleOnEditIconClick} />
                <DeleteIcon color='error' style={iconStyle} onClick={() => {if(handleOnDelete) {handleOnDelete(todo.id)}}} />
                <DoneIcon color='primary' style={iconStyle} onClick={() =>{if (handleOnDone){ handleOnDone(todo.id)}}} />
            </Box>}
        </Box>
    )
}

export default Task