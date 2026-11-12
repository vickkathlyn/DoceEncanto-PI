import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

/**
 * Meus produtos
 * Administração (CRUD) dos produtos da confeitaria
 */

interface Produto {
    id: number;
    nome: string;
    preco: string;
    imagem: string;
}

const ProdutosAdminScreen = () => {
    const router = useRouter();

    const DATA: Produto[] = [
        {
            id: 1,
            nome: "Cupcake de Framboesa",
            preco: "R$ 14,90",
            imagem: "https://picsum.photos/seed/cupcake/200"
        },
        {
            id: 2,
            nome: "Fatia de Morango",
            preco: "R$ 18,90",
            imagem: "https://picsum.photos/seed/morango/200"
        },
        {
            id: 3,
            nome: "Macarons Especiais",
            preco: "R$ 24,00",
            imagem: "https://picsum.photos/seed/macarons/200"
        },
        {
            id: 4,
            nome: "Verrine de Chocolate",
            preco: "R$ 16,50",
            imagem: "https://picsum.photos/seed/verrine/200"
        }
    ]

    const ProdutoItem = ({item}: {item: Produto}) => (
        <View style={styles.linha}>
            <Image
                style={styles.imagemProduto}
                source={{
                    uri: item.imagem,
                }}
            />
            <View style={styles.info}>
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.precoProduto}>{item.preco}</Text>
            </View>
            {/* Caminho corrigido — arquivo real é FormularioProduto.tsx */}
            <Pressable onPress={() => router.push({pathname: '/FormularioProduto', params: {id: item.id.toString()}})}>
                <Text style={styles.icone}>✎</Text>
            </Pressable>
            <Pressable onPress={() => alert(`Excluir ${item.nome}?`)}>
                <Text style={styles.icone}>🗑</Text>
            </Pressable>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <Pressable onPress={() => router.back()}>
                    <Text style={styles.voltar}>‹</Text>
                </Pressable>
                <Text style={styles.titulo}>Meus produtos</Text>
                <View style={{width: 24}}/>
            </View>

            <FlatList
                data={DATA}
                renderItem={ProdutoItem}
                keyExtractor={item => item.id.toString()}
            />

            <Pressable style={styles.fab} onPress={() => router.push('/FormularioProduto')}>
                <Text style={styles.fabTexto}>+</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF1F6',
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    voltar: {
        fontSize: 26,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#202020',
    },
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 16,
        marginBottom: 10,
    },
    imagemProduto: {
        width: 44,
        height: 44,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    nomeProduto: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#202020',
    },
    precoProduto: {
        fontSize: 13,
        color: '#E91E8C',
    },
    icone: {
        fontSize: 18,
        marginLeft: 10,
        color: '#E91E8C',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 24,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#E91E8C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabTexto: {
        color: 'white',
        fontSize: 26,
    },
});

export default ProdutosAdminScreen;