

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera access to take photos.',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS auto-permits
};

export default function ProfileHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const handleTakePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Camera access is required to take photos.');
      return;
    }

    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Camera Error', response.errorMessage);
        return;
      }

      const uri = response.assets?.[0]?.uri;
      if (uri) {
        setImageUri(uri);
        setModalVisible(false);
      }
    });
  };

  const handleChooseFromGallery = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Gallery Error', response.errorMessage);
        return;
      }

      const uri = response.assets?.[0]?.uri;
      if (uri) {
        setImageUri(uri);
        setModalVisible(false);
      }
    });
  };

  const handleDeletePhoto = () => {
    setImageUri(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.profileImageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.avatarCircleImage} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>👤</Text>
            </View>
          )}

          <View style={styles.editIconBox}>
            <Text style={styles.editIcon}>✏️</Text>
          </View>
        </View>
      </Pressable>

      {/* Image Options Modal */}
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.option} onPress={handleTakePhoto}>
                  <Text style={styles.optionText}>📷 Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={handleChooseFromGallery}>
                  <Text style={styles.optionText}>🖼️ Choose from Gallery</Text>
                </TouchableOpacity>
                {imageUri && (
                  <TouchableOpacity style={styles.option} onPress={handleDeletePhoto}>
                    <Text style={styles.optionText}>🗑️ Delete Photo</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={[styles.option, styles.cancel]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={[styles.optionText, { color: 'red' }]}>✖️ Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#1aa3ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarCircleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'cover',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  placeholderText: {
    fontSize: 40,
    color: '#1aa3ff',
  },
  editIconBox: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1aa3ff',
    elevation: 2,
  },
  editIcon: {
    fontSize: 12,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#DCF0F5',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 18,
    color: '#34495e',
    textAlign: 'center',
  },
  cancel: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
