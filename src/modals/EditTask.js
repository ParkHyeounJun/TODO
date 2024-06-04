import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    }, [taskObj]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {
            Name: taskName,
            Description: description,
        };
        updateTask(tempObj);
    };

    return (
        <Dialog open={modal} onClose={toggle} maxWidth="sm" fullWidth>
            <DialogTitle>Update Task</DialogTitle>
            <DialogContent>
                <form onSubmit={handleUpdate}>
                    <TextField
                        label="Task Name"
                        variant="outlined"
                        fullWidth
                        value={taskName}
                        onChange={handleChange}
                        name="taskName"
                        margin="dense"
                        required
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={handleChange}
                        name="description"
                        margin="dense"
                        required
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleUpdate}>
                    Update
                </Button>
                <Button variant="outlined" color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTaskPopup;
