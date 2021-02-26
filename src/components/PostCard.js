import React from 'react'
import { deletePost } from '../services/deletePost'
//import { viewDetails } from '../services/viewDetails'



function PostCard(props) {
    return (
        <div className="container bg-success postcard" >
            <div className="row">
                <div className="col-sm-1">
                    {props.id}
                </div>
                <div className="col-sm-8 ">
                    {props.title}
                </div>
                <div className="col-sm-1">
                    <button name={props.id} className="btn btn-primary" data-action="details" >VER</button>
                </div>
                <div className="col-sm-1">
                    <button name={props.id} className="btn btn-primary" data-action="patch" >EDITAR </button>
                </div>
                <div className="col-sm-1">
                    <button name={props.id} className="btn btn-danger" data-action="delete" onClick={deletePost}>BORRAR</button>
                </div>

            </div>

        </div>
    )
}

export default PostCard
