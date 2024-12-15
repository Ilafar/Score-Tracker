import { View, Text, TouchableOpacity, Image } from 'react-native';
import fabIcon from "../assets/images/component_imgs/fabIcon.png";

const Fab = ({onPress}) => {
  return (
    <View className="flex-1 justify-end items-center ">  
      <TouchableOpacity 
        className="flex-row items-center bg-primary-200 p-4 rounded-[20px]"
        onPress={onPress}
      >
        <Image source={fabIcon} className="w-8 h-8 mr-2" />
        <Text className="text-text-dark text-lg font-bold">
          Start Game
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fab;
