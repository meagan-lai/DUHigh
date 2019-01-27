import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { RNCamera } from "react-native-camera";

const landmarkSize = 2;

const flashModeOrder = {
  off: "on",
  on: "auto",
  auto: "torch",
  torch: "off"
};

const wbOrder = {
  auto: "sunny",
  sunny: "cloudy",
  cloudy: "shadow",
  shadow: "fluorescent",
  fluorescent: "incandescent",
  incandescent: "auto"
};

export default class BalanceScreen extends React.Component {
  state = {
    flash: "off",

    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality["720p"]
    },
    isRecording: false
  };

  /*  */
  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash]
    });
  }

  takeVideo = async function() {
    if (this.camera) {
      try {
        const promise = this.camera.recordAsync(this.state.recordOptions);

        if (promise) {
          this.setState({ isRecording: true });
          const data = await promise;
          this.setState({ isRecording: false });
          console.warn(data);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  };

  renderCamera() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={"We need your permission to use your camera phone"}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity style={styles.flipButton} onPress={this.toggleFlash.bind(this)}>
            <Text style={styles.flipText}> FLASH: {this.state.flash} </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignSelf: "flex-end"
          }}
        >
          <TouchableOpacity
            style={[
              styles.flipButton,
              {
                flex: 0.3,
                alignSelf: "flex-end",
                backgroundColor: this.state.isRecording ? "white" : "darkred"
              }
            ]}
            onPress={this.state.isRecording ? () => {} : this.takeVideo.bind(this)}
          >
            {this.state.isRecording ? (
              <Text style={styles.flipText}> ☕ </Text>
            ) : (
              <Text style={styles.flipText}> REC </Text>
            )}
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCamera()}
        <Button title="Balance" onPress={() => this.props.navigation.navigate("Results")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#000"
  },
  navigation: {
    flex: 1
  },
  gallery: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  flipText: {
    color: "white",
    fontSize: 15
  },
  item: {
    margin: 4,
    backgroundColor: "indianred",
    height: 35,
    width: 80,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  picButton: {
    backgroundColor: "darkseagreen"
  },
  galleryButton: {
    backgroundColor: "indianred"
  },
  facesContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#FFD700",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: "absolute",
    backgroundColor: "red"
  },
  faceText: {
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent"
  },
  row: {
    flexDirection: "row"
  }
});
