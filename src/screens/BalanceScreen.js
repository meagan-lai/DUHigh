import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { navigationOptions } from "react-navigation";
import { RNCamera } from "react-native-camera";

export default class FacialExpressionScreen extends React.Component {
  static navigationOptions = {
    headerLeft: null
  };
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null
    };
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ imageUri: data.uri });
      console.log(data.uri);
    }
  };

  renderCamera() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={
          "We need your permission to use your camera phone"
        }
      >
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          />
        </View>
      </RNCamera>
    );
  }

  renderImage() {
    return (
      <View>
        <Image source={{ uri: this.state.imageUri }} style={styles.preview} />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ imageUri: null })}
        >
          Cancel
        </Text>
        <Text
          style={styles.next}
          onPress={() => this.props.navigation.navigate("Results")}
        >
          Next
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.imageUri ? this.renderImage() : this.renderCamera()}
        <Text>Pupil Screen</Text>
        <Button
          title="Go to Results Screen"
          onPress={() => this.props.navigation.navigate("Results")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#FFF",
    marginBottom: 15
  },

  cancel: {
    position: "absolute",
    left: 20,
    top: 20,
    backgroundColor: "transparent",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 17
  },

  next: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "transparent",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 17
  }
});
