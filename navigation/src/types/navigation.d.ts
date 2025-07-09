//Adiciona home e product para a lista de parametros de RectNavigation
export type RootStackParamList = {
  home: undefined
  product: undefined
}

//Tipagem global dando extend na lista de parametros de navegação do React
declare global{
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}