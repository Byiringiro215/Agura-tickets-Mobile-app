import { images } from '@/constants/images';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={images.gradient}
        style={styles.gradient}
        resizeMode="cover"
      />
      <Image
        source={images.logo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D70076', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  logo: { 
    height: 200,   
    zIndex: 1,
  },
});