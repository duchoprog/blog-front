import { deletePost } from "./deletePost";


function handleClick(e) {


    e.preventDefault();
    let functionName = e.target.dataset.action + "Post"
    console.log(functionName)
    deletePost[functionName](1)

}

export default handleClick
