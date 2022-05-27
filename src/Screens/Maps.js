import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useState } from "react";
import { View, Text} from "react-native";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
export default function Maps() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 30.5837,
    longitude: 31.5072,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [region, setRegion] = useState({
    latitude: 30.5837,
    longitude: 31.5072,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={{ flex: 1, marginTop: 90 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyDl1crGbXLWtrgAtPPw4M4KHBk9EMoHVPM",
          language: "en",
          components: "country:EG",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={{ alignSelf: "stretch", height: "80%" }}
        initialRegion={{
          latitude: 30.5837,
          longitude: 31.5072,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
        <Marker
          coordinate={mapRegion}
          pinColor="black"
          draggable={true}
          // onDragStart={(e) => {
          //   console.log("Drag start", e.nativeEvent.coordinates);
          // }}
          onDragEnd={(e) => {
            setmapRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Sharkiah</Text>
          </Callout>
        </Marker>
        <Circle center={mapRegion} radius={600} />
      </MapView>
    </View>
  );
}
