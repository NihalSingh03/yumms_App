import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigator from './src/navigation/Navigator';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {FavouritesContext} from './src/context/favourites.context';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.Container}>
      <ThemeProvider theme={theme}>
        <FavouritesContext>
          <Navigator />
        </FavouritesContext>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
