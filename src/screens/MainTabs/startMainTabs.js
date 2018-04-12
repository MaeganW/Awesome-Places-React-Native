import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(imgSources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'amazing-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: imgSources[0]
        },
        {
          screen: 'amazing-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: imgSources[1]
        }
      ]
    });
  })
}

export default startTabs;
