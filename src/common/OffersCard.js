import React from "react";
import { Box, Heading, Image, Text, Center, HStack, Stack, NativeBaseProvider, View, ScrollView, Flex } from "native-base";
import { Entypo } from 'react-native-vector-icons';

export default function OffersCard() {
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
            <Flex direction="row" flex={4}>
                <Box flex={2}>
                    <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" w="150" h="150" />
                    <Center bg="#A01810" _text={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" top="0" left="0" px="2" py="1.5" >
                        20%
                    </Center>
                </Box>

                <Stack p="4" space={3} flex={2}>
                    <Stack space={2}>
                        <Heading size="sm" ml="-1">
                            WorkSpace Name
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#7986cb"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            City / Governorate Name
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
                            <Flex direction="row">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="600" strikeThrough>
                                    10$/hr
                                </Text>
                                <Text color="#A01810" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="600" px="2">
                                    5$/hr
                                </Text>
                            </Flex>
                        </HStack>
                    </HStack>
                </Stack>
            </Flex>
        </Box>
    </Box>;

};