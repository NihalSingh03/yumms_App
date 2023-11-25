//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
  Modal,
} from 'react-native';
import {
  Column,
  Container,
  CustomText,
  Row,
  Spacer,
  deviceHeight,
  deviceWidth,
} from '../../../components/layput.components';

import {theme} from '../../../infrastructure/theme';
import {images} from '../../../assets/images';
import useViewModal from './homeViewModal';
import {WidthHeight} from '../../../components/style';
import {styles} from './styles';
import DetailScreenModal from '../../../components/detailPageScreen/detailScreen.components';

//import { HeaderHeightContext } from '@react-navigation/native-stack';
//import { useHeaderHeight } from '@react-navigation/native-stack';

// create a component
const HomeScreen = ({navigation}: any) => {
  const {
    CATEGORIES,
    topContainerHeight,
    screenwidth,
    actualHeight,
    selectedCategory,
    setCategory,
    selectedCategoryMeals,
    handleDetailPageModal,
    modalVisible,
    setModalVisible,
    selectedMeal,
    userDetails,
  } = useViewModal();

  return (
    <View style={styles.container}>
      <DetailScreenModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedMeal={selectedMeal}
      />
      <Column>
        {/* Top Container */}

        <Column
          alignItems="center"
          style={{
            height: 180,
            width: screenwidth,
          }}>
          <Row>
            <Container
              alignItems="center"
              justifyContent="space-between"
              width={screenwidth}
              height={60}
              padding={10}
              backgroundColor={theme.colors.backgroundMain}>
              <Image
                source={{uri: userDetails.photoURL}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                }}
              />

              <Image
                source={images.AppLogoicon}
                style={{
                  width: 110,
                  height: 40,
                }}
              />

              <Image
                source={images.filterIcon}
                style={{
                  width: 26,
                  height: 30,
                }}
              />
            </Container>
          </Row>
          <Spacer top={10} />
          <Row>
            <Container
              width={screenwidth - 16}
              height={60}
              backgroundColor={theme.colors.white}
              borderRadius={theme.borderRadius.borderRadius4}
              borderWidth={2}
              justifyContent="flex-start">
              <TextInput
                placeholder="Search Recipie"
                style={{
                  width: screenwidth - 70,
                  height: 60,
                  paddingLeft: theme.padding.pd20,
                }}
                // onChangeText={onChangeText}
              />
              <Container
                width={50}
                height={50}
                alignItems="center"
                borderRadius={theme.borderRadius.borderRadius4}
                backgroundColor={theme.colors.white}>
                <Image
                  source={images.searchIcon}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Container>
            </Container>
          </Row>
          <Spacer top={10} />

          {/* Categories   */}

          <ScrollView horizontal={true}>
            {CATEGORIES.map(category => (
              <Pressable
                style={{height: 40}}
                key={category.id}
                onPress={() => {
                  setCategory(category);
                }}>
                <Container
                  width={90}
                  height={30}
                  alignItems="center"
                  margin={6}
                  backgroundColor={
                    category.id == selectedCategory.id
                      ? theme.colors.headerDarkGreen
                      : theme.colors.backgroundMain
                  }
                  borderRadius={theme.borderRadius.borderRadius4}>
                  <Text
                    style={
                      category.id == selectedCategory.id
                        ? styles.categoryTextActive
                        : styles.categoryTextInactive
                    }>
                    {category.title}
                  </Text>
                </Container>
              </Pressable>
            ))}
          </ScrollView>
        </Column>

        {/* Bottom Container */}

        <Column
          style={{
            height: actualHeight - 180,
            width: screenwidth,
            backgroundColor: theme.colors.backgroundMain,
          }}>
          <ScrollView>
            {/* Featured Element */}

            {selectedCategoryMeals.map(meal => {
              if (meal.id === selectedCategoryMeals[0].id) {
                return (
                  <Pressable
                    onPress={() => handleDetailPageModal(meal)}
                    key={meal.id}>
                    <Container
                      borderRadius={10}
                      height={actualHeight * 0.3}
                      width={screenwidth - 16}
                      margin={10}>
                      <ImageBackground
                        source={{uri: meal.imageUrl}}
                        style={{
                          ...WidthHeight(screenwidth - 16, actualHeight * 0.3),
                          borderRadius: 10,
                        }}>
                        <Row>
                          <Container
                            justifyContent="flex-start"
                            alignItems="flex-end"
                            borderRadius={10}
                            height={actualHeight * 0.3}
                            width={screenwidth - 16}
                            backgroundColor=" rgba(0, 0, 0, 0.01)">
                            <Container
                              width={screenwidth - 16}
                              borderRadius={10}
                              height={50}
                              padding={8}
                              alignItems="center"
                              justifyContent="space-between"
                              backgroundColor=" rgba(0, 0, 0, 0.01)">
                              <CustomText
                                fontFamily={theme.fontFamily.headerFont}
                                fontSize={theme.fontSize.fontSize20}>
                                {meal.title}
                              </CustomText>
                              {/* <Pressable>
                                <Image
                                  source={images.heartIcon}
                                  style={WidthHeight(22, 20)}
                                />
                              </Pressable> */}
                            </Container>
                          </Container>
                        </Row>
                      </ImageBackground>
                    </Container>
                  </Pressable>
                );
              } else {
                return (
                  <Pressable
                    onPress={() => handleDetailPageModal(meal)}
                    key={meal.id}>
                    <Container
                      borderRadius={10}
                      height={150}
                      justifyContent="flex-start"
                      width={screenwidth - 16}
                      backgroundColor={theme.colors.white}
                      borderWidth={1}
                      margin={10}>
                      <Image
                        source={{uri: meal.imageUrl}}
                        style={{
                          ...WidthHeight(150, 150),
                          borderRadius: 4,
                        }}
                      />
                      <Container
                        flexDirection="colum"
                        justifyContent="flex-start"
                        padding={theme.padding.pd8}
                        width={deviceWidth - 200}
                        borderRadius={4}
                        backgroundColor="none"
                        height={145}>
                        <Container
                          backgroundColor="none"
                          justifyContent="flex-start"
                          padding={theme.padding.pd8}
                          width={deviceWidth - 200}
                          height={60}
                          borderRadius={4}>
                          <CustomText
                            fontFamily={theme.fontFamily.headerFont}
                            color={theme.colors.headerLightGreen}>
                            {meal.title}
                          </CustomText>
                        </Container>

                        <Container
                          flexDirection="colum"
                          backgroundColor="none"
                          justifyContent="flex-start"
                          padding={theme.padding.pd8}
                          width={deviceWidth - 205}
                          height={78}
                          borderRadius={4}>
                          <Container
                            height={20}
                            alignItems="center"
                            justifyContent="flex-start"
                            backgroundColor="none">
                            <Image
                              source={images.clockIcon}
                              style={WidthHeight(16, 16)}
                            />
                            <Spacer left={8} />
                            <CustomText
                              fontFamily={theme.fontFamily.headerFont}
                              color={theme.colors.headerLightGreen}>
                              {`${meal.duration} mins`}
                            </CustomText>
                          </Container>

                          <Container
                            height={60}
                            alignItems="center"
                            justifyContent="flex-start"
                            backgroundColor="none">
                            <CustomText
                              fontFamily={theme.fontFamily.headerFont}
                              color={theme.colors.headerLightGreen}>
                              {meal.complexity}
                            </CustomText>
                            <Spacer left={20} />
                            <CustomText
                              fontFamily={theme.fontFamily.headerFont}
                              color={theme.colors.headerLightGreen}>
                              {meal.affordability}
                            </CustomText>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Pressable>
                );
              }
            })}
          </ScrollView>
        </Column>
      </Column>
    </View>
  );
};

export default HomeScreen;
