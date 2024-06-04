import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        { primaryColor: "#5D93E1", secondaryColor: "#ECF3FC" },
        { primaryColor: "#F9D288", secondaryColor: "#FEFAF1" },
        { primaryColor: "#5DC250", secondaryColor: "#F2FAF1" },
        { primaryColor: "#F48687", secondaryColor: "#FDF1F1" },
        { primaryColor: "#B964F7", secondaryColor: "#F3F0FD" }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = () => {
        let tempObj = { ...taskObj, Completed: !taskObj.Completed };
        updateTask(tempObj);
    };

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: '10px' }}>
                    {taskObj.Name}
                </span>
                <p className="mt-3">{taskObj.Description}</p>
                <div className="button-container">
                    <button className="button button-close" onClick={toggle}>Edit</button>
                    <button className="button button-delete" onClick={handleDelete}>Delete</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <input type="checkbox" checked={taskObj.Completed} onChange={handleCheckboxChange} />
                    <span style={{ marginLeft: '10px' }}>{taskObj.Completed ? "작업 완료" : "작업 미완료"}</span>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
