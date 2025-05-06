import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Paginas";
import Detalhes from "../Detalhes";


export default function Rotas(){

    const stack = createNativeStackNavigator();
    return(
        <NavigattionContainer>
            <stack.Navigator>
                <stack.Screen name="Home"component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes}/>

            </stack.Navigator>


        </NavigattionContainer>
    )
}