import React, {useState} from 'react';
import {Button, Image, Platform, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {initializeApp} from '@react-native-firebase/app';
// import {initializeApp} from 'firebase-admin';
// import admin from 'firebase-admin';
const File = () => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const pickImageAndUpload = () => {
    const launch = launchImageLibrary({quality: 0.5}, fileobj => {
      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(fileobj.assets[0].uri);

      uploadTask.on(
        'state_changed',
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress == 100);
        },
        error => {
          alert('error uploading image');
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            setImage(downloadURL);
            console.log('url', downloadURL);
          });
        },
      );
    });
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{color: 'white'}}>{image}</Text>
      <Button title="Choose File" onPress={pickImageAndUpload} />
      <Image style={{height: 100, width: 100}} source={preview} />
    </View>
  );
};

export default File;
