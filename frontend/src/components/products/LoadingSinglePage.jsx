import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"

function LoadingSinglePage() {
    return (
        <>
            <Box padding='6' boxShadow='lg' bg='white' display={["","","flex","flex","flex",]} gap="50px">
                <Skeleton size='10' w={["","","50%","50%","50%",]} />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='20' w="50%" />
            </Box>

        </>
    )
}
export default LoadingSinglePage