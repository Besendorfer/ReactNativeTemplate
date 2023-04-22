import { SafeAreaView, ScrollView, Text } from "react-native";

function HomeScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          Home Screen!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export { HomeScreen };