/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Apps = () => {
  // State Animation Opacity
  const state = React.useState(new Animated.Value(0))[0];
  // Trigger Opacity
  const [activeOpacity, setActiveOpacity] = React.useState(true);

  // TranslateY
  const stateTranslateY = React.useState(new Animated.Value(0))[0];
  const stateRef = React.useRef(stateTranslateY).current;
  // Trigger TranslateY
  const [activeInterpolate, setActiveInterpolate] = React.useState(true);

  // TranslateX
  const stateTranslateX = React.useState(new Animated.Value(0))[0];
  const stateRefX = React.useRef(stateTranslateX).current;
  // Trigger TranslateX
  const [activeInterpolateX, setActiveInterpolateX] = React.useState(true);

  React.useEffect((): void => {
    // For Opacity Updates
    Animated.timing(state, {
      toValue: activeOpacity ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // For TranslateY Updates
    Animated.timing(stateTranslateY, {
      toValue: activeInterpolate ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(stateTranslateX, {
      toValue: activeInterpolateX ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [
    activeOpacity,
    activeInterpolate,
    state,
    stateTranslateY,
    stateTranslateX,
    activeInterpolateX,
  ]);

  // Trigger Animate Opacity
  const _handleButtonOpacity = (): void => {
    setActiveOpacity(!activeOpacity);
  };

  // Trigger Interpolate
  const _handleButtonInterpolate = (): void => {
    setActiveInterpolate(!activeInterpolate);
  };

  // Trigger Interpolate
  const _handleButtonInterpolateX = (): void => {
    setActiveInterpolateX(!activeInterpolateX);
  };

  // Interpolation For TranslateY StateRef
  const translateY: any = stateRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  // Interpolation For TranslateX StateRefX
  const translateX: any = stateRefX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          { opacity: state, transform: [{ translateY }, { translateX }] },
        ]}>
        <Text style={{ color: 'white' }}>Animasi</Text>
      </Animated.View>

      <View style={styles.viewContainer}>
        <TouchableOpacity onPress={_handleButtonOpacity} style={styles.button}>
          <Text style={styles.buttonText}>Ini Button Opacity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_handleButtonInterpolate}
          style={styles.button}>
          <Text style={styles.buttonText}>Ini Button TranslateY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_handleButtonInterpolateX}
          style={styles.button}>
          <Text style={styles.buttonText}>Ini Button TranslateX</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Apps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
});
