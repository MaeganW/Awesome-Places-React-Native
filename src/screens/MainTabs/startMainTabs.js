import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

// const wDim = Dimensions.get('window');
const fixedWidth = Math.round(wDim.width * wDim.scale * 0.8);

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(imgSources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'amazing-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: imgSources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: imgSources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        },
        {
          screen: 'amazing-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: imgSources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: imgSources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "amazing-places.SideDrawer",
          // animation: false,
          // fixedWidth
        }
      }
    });
  })
}

export default startTabs;
