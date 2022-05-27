import React from "react";
import { VStack, Input, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Flex, ScrollView, View, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Header from "../common/Header";
import HomeCard from "../common/HomeCard";
import OffersCard from "../common/OffersCard";
import FooterUser from "../common/FooterUser";

function SearchBar() {
    return <VStack my="4" space={5} w="100%" maxW="350px" divider={<Box px="2">
        <Divider />
    </Box>}>
        <VStack w="100%" space={5} alignSelf="center">
            <Input placeholder="Search WorkSpaces" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
        </VStack>
    </VStack>;
}

// const Near = () => {
//     return <Box alignItems="center">
//         <Button onPress={() => {

//         }} background="#7986cb">Near Places</Button>
//     </Box>;
// };

// const SeeAll = () => {
//     return <Box alignItems="center">
//         <Button onPress={() => {

//         }} background="#fff" _text={{ color: "#7986cb" }} >See All</Button>
//     </Box>;
// };

export default function UserHome({navigation }) {
    return (
        <NativeBaseProvider>
            <View>
                <Header />
            </View>
            <ScrollView px="3">
                <Text fontWeight="bold" fontSize="3xl" pt="2">Descover</Text>
                <Text fontWeight="bold" fontSize="3xl" >Your WorkSpace</Text>

                <Center >
                    <SearchBar />
                </Center>

                {/* Taps */}
                {/* <Flex direction="row" justifyContent="space-between" my="3" px="3">
                    <Near />
                    <SeeAll />
                </Flex> */}

                {/* Slider */}
                <View py="3">
                    <Heading size="lg" ml="1.5" mb="4">
                        Our Places:
                    </Heading>
                    <HomeCard />
                </View>

                <View mt="3" >
                    <Heading size="lg" ml="1.5" mb="4">
                        Our Offers:
                    </Heading>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ marginBottom: 20 }}>
                        <OffersCard />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ marginBottom: 20 }}>
                        <OffersCard />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('WorkSpace')
                    }} style={{ marginBottom: 20 }}>
                        <OffersCard />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <FooterUser navigation={navigation}/>

        </NativeBaseProvider>
    )
}