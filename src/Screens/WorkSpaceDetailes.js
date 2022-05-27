import React, { useState } from "react";
import { Button, Modal, Box, Heading, AspectRatio, Image, Text, Center, FormControl, Link, Stack, Input, NativeBaseProvider, ScrollView, View, Flex } from "native-base";
import { AntDesign, Entypo, Ionicons } from 'react-native-vector-icons';
import { TouchableOpacity } from "react-native";
// import AppBar from "../common/AppBar";
import FooterUser from "../common/FooterUser";

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    return <Center>
        <TouchableOpacity onPress={() => setShowModal(true)}>
            <Heading size="md" ml="-1">Gallery</Heading>
        </TouchableOpacity>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Gallery</Modal.Header>
                <Modal.Body>
                    <Image source={require('../Imgs/Almorabba3.jpg')} />
<Text>hello</Text>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    </Center>;
};

// export default () => {
//     return (
//       <NativeBaseProvider>
//         <Center flex={1} px="3">
//             <Example />
//         </Center>
//       </NativeBaseProvider>
//     );
// };


const Checkout = () => {
    return <Box>
        <Box alignSelf="center" bg="#7986cb" rounded="2" p="3" m="3" w="90%" _text={{
            fontSize: "lg",
            textAlign: "center",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg"
        }}>
            Checkout
        </Box>
    </Box>;
};

const Location = () => {
    return <Box alignItems="center" pl="2">
        <Link textDecorationLine="none" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fgoo.gl%2Fmaps%2FJ6WQqhAw7LqvhyP49%3Ffbclid%3DIwAR1P4Dmfyj5-GByxES91XuO05-2Lo-nVIuOfrwaY8IgbqwUuo03ufqkqtTM&h=AT3-f1auc2GfFh5mVKL-rP04EEpyDxei-XafLpcaTvqfjMumWwW7ahAHl7AGL2YM20fzh3SWbnJ28orQKi8mKS7UZ47r0z3z3_PwpQTEPLLvdvxoyqfH-elK6XVulGGzgzLp&__tn__=-UK-R&c[0]=AT3cSy8gXGrAMSsS1VcTSZSzqD3pUyeaVRiOm1ux5icpqryXg3focuC2DZziebAb1UF301lUrWHV2dgvCQFCow0tjLsITW7E0L4E0QuDY0ypV0thfGov9xXmtrGIexHdaKZhRWMwBKgaqhMimlkJ7qBoib-CGBFhs2GJS1rzX3MMOBs">
            Open Location at Google Map.
        </Link>
    </Box>;
};

//des
const Example = ({ navigation }) => {
    return <ScrollView>
        <Box alignItems="center">
            <Box w="100%" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" >
                        <Image source={require('../Imgs/Almorabba3.jpg')} />

                    </AspectRatio>
                    <Center bg="#7986cb" _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" top="0" right="0" px="3" py="1.5" my="3" mx="4">
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
                        <Flex direction="row" justifyContent="space-between">
                            <Heading size="md" ml="-1">
                                Almorabba3
                            </Heading>
                            <Text fontSize="md" _light={{
                                color: "#7986cb"
                            }}
                                fontWeight="500" ml="-0.5" mt="1">
                                10$ /hr
                            </Text>
                        </Flex>
                        <Text fontWeight="400">
                            Almorabba3 is the first co-working space in Zagazig.
                        </Text>
                        <Text fontSize="md" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Zagazig City / Alsharkia.
                        </Text>
                    </Stack>

                    <Flex direction="row" mb="2.5" mt="1">
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star-outlined" size={18} color="#A5A5A9" />
                    </Flex>

                    <Flex direction="row" justifyContent="space-around" mt="2">
                        <TouchableOpacity onPress={() => {
                            {/* Description */ }
                        }}>
                            <Heading size="md" ml="-1" _light={{
                                color: "#7986cb"
                            }}>
                                Description
                            </Heading>
                        </TouchableOpacity>

                        <Gallery />
                    </Flex>

                    {/* Description */}
                    <View style={{display: 'none'}}>
                    <Text fontWeight="400">Almorabba3 is a meeting point for people and ideas, no matter how different they are. It is your space if you want to think, tickets or work with others. You meet people who are similar to you and who are different from you. You feel at home.</Text>
                    <Text fontWeight="400">The square is a place that can change your life.
                        It is a turning point for any idea small or big. It is a turning point for your character when you meet new people. It is a turning point in the way you think, study or work.</Text>
                    <Text fontWeight="400">The square is a place where you develop yourself.
                        The square is an idea that brought us together, let us create a place that helps others realize any idea of ​​their relegation.</Text>

                    <Flex direction="row">
                        <Entypo name="phone" size={20} color="#7986cb" />
                        <Text pl="2">Contact: 01012345678</Text>
                    </Flex>
                    <Flex direction="row">
                        <Entypo name="location-pin" size={20} color="#7986cb" />
                        <Location />
                    </Flex>
                    <TouchableOpacity onPress={() => {
                        // this.navigation.navigate('Chat')
                    }}>
                        <Flex direction="row">
                            <Ionicons name="chatbubble-ellipses" size={20} color="#7986cb" />
                            <Text pl="2">Chat with Owner</Text>
                        </Flex>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Booking')
                    }}>
                        <Checkout />
                    </TouchableOpacity>
                    </View>

                    {/* End Of Description */}



                    {/* Gallery */}
                    <View style={{display: 'none'}}>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    </View>

                </Stack>
            </Box>
        </Box>
    </ScrollView>;
};

export default function WorkSpaceDetailes({ navigation }) {
    const [showDes, setShowDes] = useState('block');
    const [showGal, setShowGal] = useState('none');
    const [showColorDes, setShowColorDes] = useState('#7986cb');
    const [showColorGal, setShowColorGal] = useState('#00');

    let showGallary = () => {
        setShowDes('none');
        setShowGal('block');
        setShowColorGal('#7986cb')
        setShowColorDes('#000')
    }
    
    let showDescription = () => {
        setShowGal('none');
        setShowDes('block');
    }

    return (
        <NativeBaseProvider>
            {/* <Flex direction="row" bg="rgba(121, 134, 203 , 0.2)" justifyContent="space-between" py="2" px="6">
                <Text style={{ color: "rgb(121, 134, 203)", fontSize: 24, fontWeight: "bold" }}>CoWorKing</Text>
                <TouchableOpacity onPress={() => {
                    // this.navigation.navigate('Chat')
                }} style={{ paddingTop: 3 }} >
                    <Ionicons name="chatbubble-ellipses" size={30} color="rgb(121, 134, 203)" />
                </TouchableOpacity>
            </Flex> */}
            <View>
                {/* <AppBar /> */}
            </View>
            <ScrollView mb="3">
                {/* <Example navigation={navigation} /> */}
                <ScrollView>
        <Box alignItems="center">
            <Box w="100%" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" >
                        <Image source={require('../Imgs/Almorabba3.jpg')} />

                    </AspectRatio>
                    <Center bg="#7986cb" _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" top="0" right="0" px="3" py="1.5" my="3" mx="4">
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
                        <Flex direction="row" justifyContent="space-between">
                            <Heading size="md" ml="-1">
                                Almorabba3
                            </Heading>
                            <Text fontSize="md" _light={{
                                color: "#7986cb"
                            }}
                                fontWeight="500" ml="-0.5" mt="1">
                                10$ /hr
                            </Text>
                        </Flex>
                        <Text fontWeight="400">
                            Almorabba3 is the first co-working space in Zagazig.
                        </Text>
                        <Text fontSize="md" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            Zagazig City / Alsharkia.
                        </Text>
                    </Stack>

                    <Flex direction="row" mb="2.5" mt="1">
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star" size={18} color="rgb(255, 206, 10)" />
                        <Entypo name="star-outlined" size={18} color="#A5A5A9" />
                    </Flex>

                    <Flex direction="row" justifyContent="space-around" mt="2">
                        <TouchableOpacity onPress={() => {setShowDes('block');
                        setShowGal('none');
                        setShowColorGal('#000');
                        // setShowColorDes('#000')
                    }}>
                            <Heading size="md" ml="-1" _light={{
                                color: `${showColorDes}`
                            }}>
                                Description
                            </Heading>
                        </TouchableOpacity>

                        {/* <Gallery /> */}
                        <TouchableOpacity onPress={showGallary }>
                            <Heading size="md" ml="-1" _light={{
                                color: `${showColorGal}`
                            }}>
                                Gallary
                            </Heading>
                        </TouchableOpacity>

                    </Flex>

                    {/* Description */}
                    <View style={{display: `${showDes}`}}>
                    <Text fontWeight="400">Almorabba3 is a meeting point for people and ideas, no matter how different they are. It is your space if you want to think, tickets or work with others. You meet people who are similar to you and who are different from you. You feel at home.</Text>
                    <Text fontWeight="400">The square is a place that can change your life.
                        It is a turning point for any idea small or big. It is a turning point for your character when you meet new people. It is a turning point in the way you think, study or work.</Text>
                    <Text fontWeight="400">The square is a place where you develop yourself.
                        The square is an idea that brought us together, let us create a place that helps others realize any idea of ​​their relegation.</Text>

                    <Flex direction="row">
                        <Entypo name="phone" size={20} color="#7986cb" />
                        <Text pl="2">Contact: 01012345678</Text>
                    </Flex>
                    <Flex direction="row">
                        <Entypo name="location-pin" size={20} color="#7986cb" />
                        <Location />
                    </Flex>
                    <TouchableOpacity onPress={() => {
                        // this.navigation.navigate('Chat')
                    }}>
                        <Flex direction="row">
                            <Ionicons name="chatbubble-ellipses" size={20} color="#7986cb" />
                            <Text pl="2">Chat with Owner</Text>
                        </Flex>
                    </TouchableOpacity>

                    
                    </View>

                    {/* End Of Description */}



                    {/* Gallery */}
                    <View style={{display: `${showGal}`}}>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    <Flex direction="row " justifyContent="space-between">
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                        <AspectRatio w="48%" >
                            <Image source={require('../Imgs/Almorabba3.jpg')} />
                        </AspectRatio>
                    </Flex>
                    </View>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Booking')
                    }}>
                        <Checkout />
                    </TouchableOpacity>

                </Stack>
            </Box>
        </Box>
    </ScrollView>;
            </ScrollView>

            <FooterUser />

        </NativeBaseProvider>
    );
};