import { getData } from "@/utils/getData";

const { useState, useEffect } = require("react");

const usePost =() => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://api.vikaxnet.com/api/posts";

    useEffect(() =>{
        const getPost = async() => {
            try {
                const result = await getData(url);
                setData(result.data.post);
                console.log('Results:');
                console.log(result);
                
            } catch (error) {
                setError(error.message);
                console.log(error.message);

                
            }
            finally {
                setLoading(false)

            }


        };
        getPost();

    }, url)

    return {data, error, loading};

}

export default usePost;