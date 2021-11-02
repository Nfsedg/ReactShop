import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setPorducts] = useState([])
    
    useEffect( async () => {
        const response = await axios(API);
        setPorducts(response.data)
    }, [])

    return products
}

export default useGetProducts