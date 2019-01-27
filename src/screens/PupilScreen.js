import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { navigationOptions } from "react-navigation";
import { RNCamera } from "react-native-camera";
import axios from "react-native-axios";
import RNFS from "react-native-fs";

export default class PupilScreen extends React.Component {
  static navigationOptions = {
    headerLeft: null
  };
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null,
      flash: "off"
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
    const isFocused = this.props.navigation.isFocused();
    if (isFocused) {
      return (
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flash}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={"We need your permission to use your camera phone"}
        >
          <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} />
          </View>
        </RNCamera>
      );
    } else {
      return null;
    }
  }
  passBlob(blob) {
    //Pass blob to API
    axios({
      method: "post",
      url: "http://ryannourbaran.pythonanywhere.com/face",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/octet-stream"
      },
      data: blob
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.navigation.navigate("Pupil2");
  }
  renderImage() {
    let blob = "";
    RNFS.readFile(this.state.imageUri, "base64").then(result => (blob = result));
    return (
      <View>
        <Image source={{ uri: this.state.imageUri }} style={styles.preview} />
        <Text style={styles.cancel} onPress={() => this.setState({ imageUri: null })}>
          Cancel
        </Text>
        <Text style={styles.next} onPress={() => this.passBlob(blob)}>
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
          title="Go to pupil with flash Screen"
          onPress={() => this.props.navigation.navigate("Pupil2")}
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
    bottom: 0,
    backgroundColor: "transparent",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 17
  }
});
