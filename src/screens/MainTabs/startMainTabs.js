import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'amazing-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place'
      },
      {
        screen: 'amazing-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place'
      }
    ]
  });
}

export default startTabs;
