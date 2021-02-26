import axios from 'axios'


export const getOnePost = async (e) => {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}