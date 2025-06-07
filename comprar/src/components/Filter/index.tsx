import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { StatusIcon } from "../StatusIcon";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus,
  isActive: boolean
}

export function Filter({ status, isActive, ...rest}: Props) {
  return (
    <TouchableOpacity
    style={[styles.container, { opacity: isActive ? 1 : 0.5}]} //É possivel editar multiplos styles baseados no resultado de uma função
    activeOpacity={0.8}
    {...rest}>

      <StatusIcon status={status}/>

      <Text style={styles.container}>
        { status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  )
}