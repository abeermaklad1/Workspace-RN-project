import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, View, ScrollView } from "native-base";

export default function GovernorateCard() {
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
                <Center bg="#7986cb" _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "xs"
                }} position="absolute" bottom="0" px="3" py="1.5">
                    PHOTOS
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        Governorate Name
                    </Heading>
                    <Text fontSize="sm" _light={{
                        color: "#7986cb"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        5 WorkSpaces
                    </Text>
                </Stack>
            </Stack>
        </Box>
    </Box>;

};