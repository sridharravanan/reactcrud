import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps } from "react-router";
import { useParams } from "react-router-dom";
import {ModelDesignation} from '../designation/Model';

function EditDesignation() {
    let { slug } = useParams<{ slug: string }>();
    const [FormDesignation, setFormDesignation] = useState({} as ModelDesignation);
    useEffect(() => {
        getEditData();
    },[]);

    const getEditData = async () => {
        axios.get('http://192.168.43.73:8000/api/designation/'+slug)
            .then(res=>{
                if( res.data ){
                    setFormDesignation(res.data);
                }
                console.log(res.data)
            })
            .catch(res=>{});
    };


    const onSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //#todo need to check validation...!
        //#todo need loader...!
        axios.put('http://192.168.43.73:8000/api/designation/'+slug,FormDesignation)
            .then(res=>{
                setFormDesignation(res.data);
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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditDesignation;
