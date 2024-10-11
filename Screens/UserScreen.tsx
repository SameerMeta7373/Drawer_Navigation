import {Button, Text, View} from 'react-native';

function UserScreen({navigation}) {
  function OpenDrawer() {
    navigation.toggleDrawer();
  }

  return (
    <View>
      <Text> User Screen</Text>
      {/* <Button title="open drawer" onPress={OpenDrawer}></Button> */}
    </View>
  );
}
export default UserScreen;
