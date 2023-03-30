import { Box, Image, Text } from "@chakra-ui/react";

function ProductCart({image,title,price,ogprice,is_new}){
    return (
        <Box fontFamily="sans-serif" textAlign="start">
            <Box>
                <Image src={image} alt="Image" backgroundColor="#F7F7F7" />
            </Box>
            <Box>
                <Text fontSize={["13px","14px","15px","16px","19px","19px"]}>{title}</Text>
            </Box>
            <Box display="flex" gap="7px">
                <Text fontWeight="bold" fontSize={["16px","17px","19px","18px","21px","21px"]}>{price}</Text>
                <Text fontWeight="bold" fontSize={["16px","17px","19px","18px","21px","21px"]} color="gray" textDecoration="line-through">{ogprice}</Text>
            </Box>
        </Box>
    )
}
export default ProductCart