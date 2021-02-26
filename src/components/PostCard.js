import React from 'react'
import { deletePost } from '../services/deletePost'



function PostCard(props) {
    return (
        <div className="container bg-success postcard" >
            <div className="row">
                <div className="col-sm-2">
                    {props.id}
                </div>
                <div className="col-sm-6 ">
                    {props.title}
                </div>
                <div className="col-sm-2">
                    <button name={props.id} className="btn btn-primary" data-action="patch" onClick={deletePost}>EDITAR </button>
                </div>
                <div className="col-sm-2">
                    <button name={props.id} className="btn btn-danger" data-action="delete" onClick={deletePost}>BORRAR</button>
                </div>

            </div>

        </div>
    )
}

export default PostCard
