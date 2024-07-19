import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/");
        return response.data;
    }
    catch (error) {
        console.error("error fetch data: ", error);
        throw error;
    }
}

export { fetchData };