"use client"
import { Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card'

export default function index() {
    return <div style={{margin:"1em 0em"}}>
        <Center as='h1' fontWeight={900} fontFamily="Gilroy" textDecoration="underline" fontSize={'xx-large'}  bg="">District Wise Products</Center>
        <Grid padding={5} templateColumns='repeat(5,1fr)' gap={6} bg="  ">
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            {/* <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem>
            <GridItem>
                <Card />
            </GridItem> */}
        </Grid>
    </div>
}
