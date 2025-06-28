
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";
import Bar from "./Bar";
import HorizontalLogoGrid from "./HorizontalLogoGrid";
import VerticalLogoList from "./VerticalLogoList";
 
 


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Bar />
      <FlatList
      ListHeaderComponent={
          <View>
            <HorizontalLogoGrid />
        <VerticalLogoList />
          </View>
      }>

        
         
      </FlatList>

    </SafeAreaView>
  );
}


