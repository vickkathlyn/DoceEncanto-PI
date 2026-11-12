import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

/**
 * Catálogo
 * Listagem de produtos da confeitaria Doce Encanto
 */

// 1. Definimos o tipo do nosso produto para o TypeScript entender
type ProdutoType = {
    id: number;
    nome: string;
    preco: string;
    imagem: string;
};

const CatalogoScreen = () => {
    const router = useRouter();

    const DATA: ProdutoType[] = [
        {
            "id": 1,
            "nome": "Cupcake de Framboesa",
            "preco": "R$ 14,90",
            "imagem": "https://picsum.photos/seed/cupcake/200"
        },
        {
            "id": 2,
            "nome": "Fatia de Morango",
            "preco": "R$ 18,90",
            "imagem": "https://picsum.photos/seed/morango/200"
        },
        {
            "id": 3,
            "nome": "Macarons Especiais",
            "preco": "R$ 24,00",
            "imagem": "https://picsum.photos/seed/macarons/200"
        },
        {
            "id": 4,
            "nome": "Verrine de Chocolate",
            "preco": "R$ 16,50",
            "imagem": "https://picsum.photos/seed/verrine/200"
        }
    ];

    // 2. Tipamos as props do componente Produto
    const Produto = ({ item }: { item: ProdutoType }) => (
        <Pressable onPress={() => alert(`Adicionado: ${item.nome}`)}>
            <View style={styles.containerProduto}>
                <Image
                    style={styles.imagemProduto}
                    source={{
                        uri: item.imagem,
                    }}
                />
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.precoProduto}>{item.preco}</Text>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Doce Encanto</Text>
                <Pressable onPress={() => router.push('/carrinho')}>
                    <Text style={styles.carrinho}>🛒</Text>
                </Pressable>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerTexto}>OFERTA ESPECIAL — Ganhe 15% off nos macarons</Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={Produto}
                // 3. Corrigido: convertendo o ID para string com .toString()
                keyExtractor={item => item.id.toString()} 
                numColumns={2}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF1F6',
        padding: 8,
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E91E8C',
    },
    carrinho: {
        fontSize: 20,
    },
    banner: {
        backgroundColor: '#E91E8C',
        borderRadius: 10,
        padding: 12,
        margin: 8,
    },
    bannerTexto: {
        color: 'white',
        fontSize: 13,
    },
    containerProduto: {
        flex: 1,
        backgroundColor: 'white',
        margin: 6,
        padding: 10,
        borderRadius: 10,
        width: 160,
    },
    imagemProduto: {
        width: '100%',
        height: 90,
        borderRadius: 8,
        marginBottom: 6,
    },
    nomeProduto: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#202020',
    },
    precoProduto: {
        fontSize: 13,
        color: '#E91E8C',
    },
});

export default CatalogoScreen;