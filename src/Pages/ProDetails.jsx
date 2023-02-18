import React, { useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProDetails(){
    const [data, setData] = useState({})
    const flag = useParams();
    const id = +flag.id;
    
    async function getdata(id){
       let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
       
       try{
        let res = await axios.get(url);
        console.log(res.data.data)
        setData(res.data.data)
       }catch(err) {
        console.log(err)
       }
    }
    
    useEffect(() =>{
        getdata(id)
    }, [])
    console.log(data)

    const handleclick = () => {

    }

    return(
        <Box  textAlign={"left"} margin="2%" width="50%" >
            <Box width="50%" >
            <Image src={data.image} width="100%"/>
            </Box>
            <Text>{data.title}</Text>
            <Text>{data.category}</Text>
            <Text>Rs. {data.price}</Text>
            <Text> {data.brand}</Text>
            <Button onClick={handleclick}>Add To Cart</Button>       
        </Box>
    )
}



