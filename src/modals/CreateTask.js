import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "completed") {
            setCompleted(e.target.checked);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {
            Name: taskName,
            Description: description,
            Completed: completed,
        };
        save(taskObj);
        setTaskName('');
        setDescription('');
        setCompleted(false);
    };

    return (
        <Dialog open={modal} onClose={toggle} maxWidth="sm" fullWidth>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSave}>
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={completed}
                                onChange={handleChange}
                                name="completed"
                                color="primary"
                            />
                        }
                        label="Task Completed"
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Create
                </Button>
                <Button variant="outlined" color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
