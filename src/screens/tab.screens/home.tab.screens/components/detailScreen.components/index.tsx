import {
  Text,
  View,
  Modal,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {HomeScreenModalProps} from '../../../../../types/homeScreen.types';
import {
  Container,
  CustomText,
  Row,
  deviceHeight,
  deviceWidth,
} from '../../../../../components/layput.components';
import useViewModal from './useViewModal';
import {theme} from '../../../../../infrastructure/theme';
import {images} from '../../../../../assets/images';
import {WidthHeight} from '../../../../../components/style';

const DetailScreenModal = (props: HomeScreenModalProps) => {
  const {modalVisible, setModalVisible, selectedMeal} = useViewModal(props);

  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={{flex: 1}}>
        {/* Top image container */}

        <Container height={deviceHeight * 0.4} width={deviceWidth}>
          <ImageBackground
            source={{uri: selectedMeal?.imageUrl}}
            style={{
              width: deviceWidth,
              height: deviceHeight * 0.4,
              alignItems: 'center',
            }}>
            <Row>
              <Container
                width={deviceWidth}
                height={40}
                backgroundColor="rgba(0, 0, 0, 0.15)"
                alignItems="center"
                justifyContent="space-between">
                <Container
                  backgroundColor="none"
                  width={40}
                  height={40}
                  padding={10}
                  alignItems="center"
                  justifyContent="space-between">
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      source={images.arrowWhite}
                      style={WidthHeight(24, 24)}
                    />
                  </Pressable>
                </Container>
                <Container
                  backgroundColor="none"
                  width={80}
                  height={40}
                  padding={10}
                  alignItems="center"
                  justifyContent="space-between">
                  <Pressable>
                    <Image
                      source={images.shareIcon}
                      style={WidthHeight(24, 24)}
                    />
                  </Pressable>
                  <Pressable>
                    <Image
                      source={images.EmptyHeartIcon}
                      style={WidthHeight(24, 24)}
                    />
                  </Pressable>
                </Container>
              </Container>
            </Row>
          </ImageBackground>
        </Container>
        {/* Botton Container */}
        <Container
          backgroundColor={theme.colors.backgroundMain}
          height={deviceHeight * 0.6}
          width={deviceWidth}>
          <Row>
            <Container
              width={deviceWidth - 90}
              height={60}
              borderRadius={4}
              margin={10}
              backgroundColor={theme.colors.white}>
              <Container
                width={100}
                height={60}
                padding={6}
                backgroundColor="none"
                alignItems="center"
                justifyContent="space-between">
                <Image source={images.clockIcon} style={WidthHeight(16, 16)} />
                <CustomText
                  fontSize={theme.fontSize.fontSize14}
                  color={
                    theme.colors.headerDarkGreen
                  }>{`${selectedMeal?.duration} mins`}</CustomText>
              </Container>

              <Container
                width={100}
                height={60}
                padding={6}
                backgroundColor="none"
                alignItems="center"
                justifyContent="space-between">
                <Image source={images.bucketIcon} style={WidthHeight(16, 16)} />
                <CustomText
                  fontSize={theme.fontSize.fontSize14}
                  color={
                    theme.colors.headerDarkGreen
                  }>{`4 Persons`}</CustomText>
              </Container>

              <Container
                width={100}
                height={60}
                padding={10}
                backgroundColor="none"
                alignItems="center"
                justifyContent="space-between">
                <Image source={images.energyIcon} style={WidthHeight(16, 16)} />
                <CustomText
                  fontSize={theme.fontSize.fontSize14}
                  color={
                    theme.colors.headerDarkGreen
                  }>{`1.5Kcal `}</CustomText>
              </Container>

            </Container>
          </Row>
        </Container>
      </View>
    </Modal>
  );
};

export default DetailScreenModal;
