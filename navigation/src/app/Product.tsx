import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Product(){
  //navigation - hook para usar métodos de navegação
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 10 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product</Title>
      </Header>
    </View>
  );
}