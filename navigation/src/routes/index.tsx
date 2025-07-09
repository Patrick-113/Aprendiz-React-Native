import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";

// Container de navegação raiz
export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  )
}