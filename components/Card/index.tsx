'use client'
import {useState} from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  Tooltip,
  Icon,
  chakra,   
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

export default function Card() {
    const [liked, setLiked] = useState(false)
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://img.freepik.com/premium-photo/stack-plaids-christmas-decorations-wooden-wall_176873-513.jpg?size=626&ext=jpg&ga=GA1.1.1080741457.1695030697&semt=ais"
          }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://img.freepik.com/free-photo/close-up-winter-sweaters-with-leaves_23-2148312126.jpg?size=626&ext=jpg&ga=GA1.1.1080741457.1695030697&semt=ais"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={5}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              Product Name
            </Heading>
            <Text color={"gray.500"}>District Name</Text>
          </Stack>

          <Stack align={"center"}>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={700} fontSize={"xl"}>
                &#8377;57
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                &#8377;199
              </Text>
            </Stack>
            <HStack color="black">
              <Flex
                p={4}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                cursor={"pointer"}
                w="full"
              >
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
              </Flex>
              <Flex
                p={3}
                alignItems="center"
                justifyContent={"space-between"}
                roundedBottom={"sm"}
                borderLeft={"1px"}
                cursor="pointer"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <BsHeartFill fill="red" fontSize={"24px"} />
                ) : (
                  <BsHeart fontSize={"24px"} />
                )}
              </Flex>
            </HStack>
          </Stack>

          <Button
            w={"full"}
            mt={3}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Center>
  );
}