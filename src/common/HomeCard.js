import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Flex, ScrollView } from "native-base";
import { TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from 'react-native-vector-icons';

export default function HomeCard() {
    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                </AspectRatio>
                <Center bg="rgba(121, 134, 203 ,0.8)" _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" top="0" right="0" px="2" py="1.5" m="1.5">
                    <TouchableOpacity onPress={() => {
                        // Change Heart
                        // <AntDesign name="heart" size={18} color="#fff" />
                    }}>
                        <AntDesign name="hearto" size={18} color="#fff" />
                    </TouchableOpacity>
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        WorkSpace Name
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "#7986cb"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        City / Governorate Name Governorate Name Governorate Name
                    </Text>
                </Stack>
                <Flex direction="row">
                    <Entypo name="star" size={16} color="rgb(255, 206, 10)" />
                    <Entypo name="star" size={16} color="rgb(255, 206, 10)" />
                    <Entypo name="star" size={16} color="rgb(255, 206, 10)" />
                    <Entypo name="star" size={16} color="rgb(255, 206, 10)" />
                    <Entypo name="star-outlined" size={16} color="#A5A5A9" />
                </Flex>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="600">
                            10$/hr
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    </Box>;

};