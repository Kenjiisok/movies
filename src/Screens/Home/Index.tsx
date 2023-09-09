import { View, Text, TextInput, FlatList, ActivityIndicator} from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovies } from "../../Components/CardMovies/Index";

interface Movie {
    id: number;
    title: string;
    poster_path:  string;
    overview: string;
}

export function Home(){

    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([])
    const [searchResultMovies, setsearchResultMovies] = useState<Movie[]>([]) 
    const [page, setPage] = useState(1);
    const [loadding, setLoading] = useState(false);
    const [noResult , setNoResult] = useState(false);
    const [search, setSearch] = useState("");
    
   
    useEffect(() => {
        loadMoreData();
    },[])

    const loadMoreData = async () => {
        const response = await api.get("/movie/popular", {
            params: {
                page,
            }
        });
        setDiscoveryMovies([...discoveryMovies,...response.data.results]);
        setPage(page + 1)
        setLoading(false)
    }

    const searchMovies = async (query: string) => {
        setLoading(true);
        const response = await api.get("/search/movie", {
            params: {
                query,
            }
        });
        if (response.data.results.length === 0){
            setNoResult(true);
            setLoading(false);
            setsearchResultMovies([]);
        } else{
            setsearchResultMovies(response.data.results)
        }
        setLoading(true)
    }

    const handleSearch = (text: string) => {
        setSearch(text)
        if (text.length > 1){
            searchMovies(text)
        }   else {
            setNoResult(false);
            setsearchResultMovies([])
            setLoading(false);
        }
    }

    const movieData = search.length > 1 ? searchResultMovies : discoveryMovies

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
            <View style={styles.containerInput}>
                <TextInput 
                 placeholderTextColor="#FFF"
                 placeholder="Buscar" 
                 style={styles.Input}
                 value={search}
                 onChangeText={handleSearch}
                />
                <MagnifyingGlass color="#fff" size={25} weight="light"/>
            </View>

                {noResult && (
                    <Text style={styles.noResult}>
                        Nenhum filme encontrado para "{search}"
                    </Text>
                )}

            </View>
            <View>
                <FlatList
                    data={movieData}
                    numColumns={3}
                    renderItem={(item) => 
                        <CardMovies 
                            data={item.item}  
                        />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 35, 
                        paddingBottom: 100 
                    }}
                    onEndReached={() => loadMoreData()}
                    onEndReachedThreshold={0.3}
                />
                {loadding && <ActivityIndicator size={50} color='#0296e5'/>}
            </View>
        </View>


    )
}