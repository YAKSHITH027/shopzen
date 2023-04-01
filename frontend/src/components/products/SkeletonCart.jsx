import { Skeleton, SkeletonCircle, SkeletonText, Stack, } from '@chakra-ui/react'

function SkeletonCart(){
    return(
        <>
        <Stack>
            <Skeleton w={["200px","200px","250px","300px","300px","300px",]} h={["200px","200px","250px","300px","300px","300px",]}/>
            <Skeleton w="90%" h="20px"/>
            <Skeleton w="40%" h="20px"/>
        </Stack>
        </>
    )
}
export default SkeletonCart