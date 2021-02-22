import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ModelDesignation} from '../designation/Model';
import { Link } from "react-router-dom";

function ListDesignation() {
    const [Designations, setDesignation] = useState([] as ModelDesignation[]);

    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        axios.get('http://192.168.43.73:8000/api/designation/grid')
            .then(res=>{
                if( res.data ){
                    setDesignation(res.data.data);
                }
                console.log(res.data)
            })
            .catch(res=>{});
    };
    return (
        <div>
            <Link to={'/designation/add'} >Add</Link>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {Designations.length > 0 ? (
                Designations.map(designation => (
                    <tr key={designation.id}>
                        <td>{designation.name}</td>
                        <td>{designation.description}</td>
                        <td><Link to={'/designation/edit/'+designation.id} >Edit</Link></td>
                    </tr>
                        )
                    )
                ) : (
                <tr>
                    <td colSpan={3}>no users</td>
                </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ListDesignation;
