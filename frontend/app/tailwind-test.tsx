import { View, Text, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TailwindTest() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-500 p-6 pt-12">
        <Text className="text-3xl font-bold text-white text-center">
          Tailwind Test Page
        </Text>
        <Text className="text-white text-center mt-2">
          Testing NativeWind Styles
        </Text>
      </View>

      {/* Content Container */}
      <View className="p-4">
        {/* Colors Test */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Color Tests
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <View className="bg-red-500 p-3 rounded">
              <Text className="text-white font-semibold">Red</Text>
            </View>
            <View className="bg-green-500 p-3 rounded">
              <Text className="text-white font-semibold">Green</Text>
            </View>
            <View className="bg-blue-500 p-3 rounded">
              <Text className="text-white font-semibold">Blue</Text>
            </View>
            <View className="bg-yellow-500 p-3 rounded">
              <Text className="text-white font-semibold">Yellow</Text>
            </View>
            <View className="bg-purple-500 p-3 rounded">
              <Text className="text-white font-semibold">Purple</Text>
            </View>
          </View>
        </View>

        {/* Spacing Test */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Spacing & Layout
          </Text>
          <View className="bg-blue-100 p-2 mb-2">
            <Text className="text-gray-700">Padding: p-2</Text>
          </View>
          <View className="bg-green-100 p-4 mb-2">
            <Text className="text-gray-700">Padding: p-4</Text>
          </View>
          <View className="bg-purple-100 p-6">
            <Text className="text-gray-700">Padding: p-6</Text>
          </View>
        </View>

        {/* Text Styles */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Text Styles
          </Text>
          <Text className="text-xs text-gray-600 mb-1">Extra Small Text (text-xs)</Text>
          <Text className="text-sm text-gray-600 mb-1">Small Text (text-sm)</Text>
          <Text className="text-base text-gray-700 mb-1">Base Text (text-base)</Text>
          <Text className="text-lg text-gray-800 mb-1">Large Text (text-lg)</Text>
          <Text className="text-xl font-bold text-gray-900 mb-1">Extra Large Bold (text-xl)</Text>
          <Text className="text-2xl font-bold text-blue-600">2XL Blue Bold (text-2xl)</Text>
        </View>

        {/* Border & Rounded */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Borders & Rounded
          </Text>
          <View className="border border-gray-300 p-3 mb-2">
            <Text className="text-gray-700">Border Gray</Text>
          </View>
          <View className="border-2 border-blue-500 rounded-lg p-3 mb-2">
            <Text className="text-gray-700">Blue Border + Rounded</Text>
          </View>
          <View className="border-4 border-red-500 rounded-full p-3">
            <Text className="text-gray-700 text-center">Thick Red Border + Rounded Full</Text>
          </View>
        </View>

        {/* Flex Layout */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Flex Layout
          </Text>
          <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded mb-2">
            <Text className="text-gray-700 font-semibold">Left</Text>
            <Text className="text-gray-700 font-semibold">Center</Text>
            <Text className="text-gray-700 font-semibold">Right</Text>
          </View>
          <View className="flex-row justify-center gap-2">
            <View className="bg-blue-400 p-3 rounded">
              <Text className="text-white">Item 1</Text>
            </View>
            <View className="bg-green-400 p-3 rounded">
              <Text className="text-white">Item 2</Text>
            </View>
            <View className="bg-red-400 p-3 rounded">
              <Text className="text-white">Item 3</Text>
            </View>
          </View>
        </View>

        {/* Interactive Button */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <Text className="text-2xl font-bold text-gray-800 mb-3">
            Interactive Elements
          </Text>
          <Pressable className="bg-blue-600 p-4 rounded-lg active:bg-blue-700">
            <Text className="text-white text-center font-bold text-lg">
              Press Me!
            </Text>
          </Pressable>
        </View>

        {/* Back Button */}
        <Link href="/" asChild>
          <Pressable className="bg-gray-800 p-4 rounded-lg mb-8">
            <Text className="text-white text-center font-bold">
              Back to Home
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
