import { Grid, GridItem, Skeleton, SkeletonCircle, SkeletonText, Stack, } from '@chakra-ui/react'

import SkeletonCart from './SkeletonCart.jsx';

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4];
    return (
        <Grid gridTemplateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(4,1fr)","repeat(4,1fr)"]} gap={["5px","7px","10px","10px","15px","15px",]}>
            {
                loadPages.map((el)=>(
                    <GridItem>
                    <SkeletonCart/>
                    </GridItem>
                ))
            }
        </Grid>
    );
}