import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  ImageBackground,
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
import DetailScreenModal from '../home.tab.screens/components/detailScreen.components';
import {theme} from '../../../infrastructure/theme';
import {images} from '../../../assets/images';
import useViewModal from './favouratesViewModal';
import {WidthHeight} from '../../../components/style';
import Meal from '../../../db/models/meal';

// create a component
const FavouratesScreen = ({navigation}: any) => {
  const {favouriteItems, handleDetailPageModal} = useViewModal();
  if (favouriteItems == null) {
    return (
      <View style={styles.container}>
        <Text>NO Favourite Items.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Column>

          <Column
            style={{
              height: deviceHeight,
              width: deviceWidth,
              backgroundColor: theme.colors.backgroundMain,
            }}>
            <ScrollView>
              {/* Featured Element */}

              {favouriteItems.map((meal: Meal, index) => {
                if (favouriteItems[0].id === meal.id) {
                  return (
                    <Pressable
                      onPress={() => handleDetailPageModal(meal)}
                      key={index}>
                      <Container
                        borderRadius={10}
                        height={deviceHeight * 0.3}
                        width={deviceWidth - 16}
                        margin={10}>
                        <ImageBackground
                          source={{uri: meal.imageUrl}}
                          style={{
                            ...WidthHeight(
                              deviceWidth - 16,
                              deviceHeight * 0.3,
                            ),
                            borderRadius: 10,
                          }}>
                          <Row>
                            <Container
                              margin={10}
                              justifyContent="flex-start"
                              alignItems="flex-end"
                              borderRadius={10}
                              height={deviceHeight * 0.3}
                              width={deviceWidth - 32}
                              backgroundColor=" rgba(0, 0, 0, 0.02)">
                              <Container
                                width={deviceWidth - 32}
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
                                <Pressable>
                                  <Image
                                    source={images.heartIcon}
                                    style={WidthHeight(22, 20)}
                                  />
                                </Pressable>
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
                      // onPress={() => handleDetailPageModal(meal)}
                      key={index}>
                      <Container
                        borderRadius={10}
                        height={150}
                        justifyContent="flex-start"
                        width={deviceWidth - 16}
                        backgroundColor={theme.colors.white}
                        borderWidth={2}
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
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default FavouratesScreen;
