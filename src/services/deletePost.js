import axios from 'axios'


export const deletePost = async (e) => {
    e.preventDefault()

    console.log(e.target.dataset.action)

    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${e.target.name}`);
        alert(`Hopefully record ${e.target.name} has been deleted`)
        //return response.data;
    } catch (error) {
        throw error;
    }
}