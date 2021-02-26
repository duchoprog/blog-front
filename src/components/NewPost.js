import React, { useState } from 'react'
import axios from 'axios'


function NewPost() {

  const [post, setPost] = useState({
    titulo: '',
    contenido: ''
  })

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    //Form checks
    if (!post.titulo) {
      alert("Titulo es obligatorio")
      return
    }
    if (!post.contenido) {
      alert("Contenido es obligatorio")
      return
    }

    axios({
      "method": "POST",
      "url": "https://jsonplaceholder.typicode.com/posts",
      "data": post

    })
      .then((response) => {
        alert("Let's suppose it went well")
        setPost({
          titulo: "",
          contenido: ""
        })

      })
      .catch((error) => {
        console.log("CATCH = ", error.response)
      });

  }

  return (
    <div>
      <h2> New Post</h2>

      <>
        <div className="row d-flex justify-content-center">

          <form id="newPostForm" onSubmit={handleSubmit} className=" container">


            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Titulo</label>
              <input type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Titulo del post"
                name="titulo"
                value={post.titulo}
                onChange={handleChange}
              />
            </div>


            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Contenido</label>
              <textarea className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                type="text"
                name="contenido"
                value={post.contenido}
                onChange={handleChange}>
              </textarea>
            </div>







            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </form>
        </div>
      </>
    </div>
  )
}

export default NewPost

