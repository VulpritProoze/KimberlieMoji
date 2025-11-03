import { Text, View } from 'react-native';

export default function TestScreen() {
  return (
    <View className="p-20 flex-1 items-center justify-center bg-red-100">
      <Text className="text-2xl text-bold text-blue-500 font-bold">
        Tailwind is working!
      </Text>
      <View className="w-16 h-16 bg-green-400 mt-4 rounded-full" />
    </View>
  );
}