import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ModelDesignation} from '../designation/Model';
function CreateDesignation() {
    const initUser: ModelDesignation= { id:0, name: "", description: "" };
    const [FormDesignation, setFormDesignation] = useState(initUser);
    const onSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //#todo need to check validation...!
        //#todo need loader...!
        axios.post('http://192.168.43.73:8000/api/designation',FormDesignation)
            .then(res=>{
                setFormDesignation(initUser);
            })
            .catch(res=>{});

    };
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDesignation({ ...FormDesignation, [name]: value });
    };
    return (
        <div>
            <form onSubmit={onSubmit} >
                <div className="form-group col-md-12">
                    <label>Name </label>
                    <input type="text" name="name"
                           value={FormDesignation.name}
                           onChange={onInputChange}
                           className="form-control" placeholder="Enter Designation name" />
                </div>
                <div className="form-group col-md-12">
                    <label>Description</label>
                    <input type="text" name="description"
                           value={FormDesignation.description}
                           onChange={onInputChange}
                           className="form-control" placeholder="Enter Designation description" />
                </div>
                <div className="form-group col-md-4 pull-right">
                    <button className="btn btn-success" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateDesignation;
