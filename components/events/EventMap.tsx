
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { View } from 'react-native';

export default function EventMap() {
  const location = {
    latitude: -1.9441,
    longitude: 30.0891,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };

  return (
    <View className="h-64 w-full overflow-hidden rounded-2xl">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={location}
        // customMapStyle={lightMapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        scrollEnabled={true}
      >
        <Marker coordinate={location} pinColor="#D70076" />
      </MapView>
    </View>
  );
}


// const lightMapStyle = [
//   {
//     elementType: 'geometry',
//     stylers: [{ color: '#f5f5f5' }],
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#616161' }],
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [{ color: '#f5f5f5' }],
//   },
//   {
//     featureType: 'administrative.land_parcel',
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#bdbdbd' }],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [{ color: '#eeeeee' }],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#757575' }],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{ color: '#ffffff' }],
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#757575' }],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{ color: '#dadada' }],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#616161' }],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{ color: '#e5e5e5' }],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{ color: '#c9c9c9' }],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{ color: '#9e9e9e' }],
//   },
// ];
