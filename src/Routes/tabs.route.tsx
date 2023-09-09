import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Screens/Home/Index"
import { styles } from '../Screens/Home/styles';
import { BookBookmark, BookmarksSimple, House, MagnifyingGlass } from "phosphor-react-native";
import { Details } from "../Screens/Details/Index";
import { Search } from "../Screens/Search/Index";
import { MyList } from "../Screens/MyList/Index";

const {Navigator,Screen} = createBottomTabNavigator()

export function TabRoutes(){

    return(
        <Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#242a32',
                    height: 78,
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderTopColor: '#0296e5',
                },
                headerShown: false,
                tabBarActiveTintColor: '#0296e5',
                tabBarInactiveTintColor: '#67686D',
                tabBarShowLabel: false,
            }}
        >
            <Screen 
                name="Home" 
                component={Home} 
                options=
                {{tabBarIcon: ({color}) => ( 
                    <House color={color} size={30} weight="light"/>
            )}}
            />

            <Screen 
                name="Search" 
                component={Search} 
                options=
                {{tabBarIcon: ({color}) => ( 
                    <MagnifyingGlass color={color} size={30} weight="light"/>
            )}}
            />    

            <Screen 
                name="MyList" 
                component={MyList} 
                options=
                {{tabBarIcon: ({color}) => ( 
                    <BookmarksSimple color={color} size={30} weight="light"/>
            )}}
            />

            <Screen 
                name="Details" 
                component={Details} 
                options=
                {{tabBarButton: () => null
                }}
            />   
        </Navigator>
    )
}