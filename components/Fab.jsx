import { View, Text, TouchableOpacity, Image } from 'react-native';

const Fab = ({title,fabIcon,buttonStyle,onPress}) => {
  return (
    <View className="flex-1 justify-end items-center ">  
      <TouchableOpacity 
        className={`flex-row items-center ${buttonStyle} p-4 rounded-[20px]`}
        onPress={onPress}
      >
        <Image source={fabIcon} className="w-8 h-8 mr-2" />
        <Text className="text-text-dark text-lg font-bold">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fab;
