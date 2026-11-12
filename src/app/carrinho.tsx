import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

/**
 * Carrinho de compras
 * Lista de itens selecionados antes do pagamento
 */

// Define o "formato" de um item do carrinho — isso é o que resolve
// os erros de "implicitly has an 'any' type"
interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
}

const CarrinhoScreen = () => {
    const router = useRouter();

    const [itens, setItens] = useState<ItemCarrinho[]>([
        {
            id: 1,
            nome: "Cupcake de Framboesa",
            preco: 14.9,
            quantidade: 2,
            imagem: "https://picsum.photos/seed/cupcake/200"
        },
        {
            id: 2,
            nome: "Fatia de Morango",
            preco: 18.9,
            quantidade: 1,
            imagem: "https://picsum.photos/seed/morango/200"
        }
    ]);

    // id e delta agora têm tipo explícito: number
    const alterarQuantidade = (id: number, delta: number) => {
        setItens(itens.map(item =>
            item.id === id ? {...item, quantidade: item.quantidade + delta} : item
        ));
    }

    const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

    // {item} agora é tipado como ItemCarrinho
    const Item = ({item}: {item: ItemCarrinho}) => (
        <View style={styles.linha}>
            <Image
                style={styles.imagemItem}
                source={{
                    uri: item.imagem,
                }}
            />
            <View style={styles.info}>
                <Text style={styles.nomeItem}>{item.nome}</Text>
                <View style={styles.stepper}>
                    <Pressable onPress={() => alterarQuantidade(item.id, -1)}>
                        <Text style={styles.stepperBotao}>-</Text>
                    </Pressable>
                    <Text style={styles.stepperValor}>{item.quantidade}</Text>
                    <Pressable onPress={() => alterarQuantidade(item.id, 1)}>
                        <Text style={styles.stepperBotao}>+</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.precoItem}>
                R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <Pressable onPress={() => router.back()}>
                    <Text style={styles.voltar}>‹</Text>
                </Pressable>
                <Text style={styles.titulo}>Carrinho de compras</Text>
                <View style={{width: 24}}/>
            </View>

            <FlatList
                data={itens}
                renderItem={Item}
                // keyExtractor precisa devolver string — por isso o .toString()
                keyExtractor={item => item.id.toString()}
            />

            <View style={styles.rodape}>
                <View style={styles.linhaTotal}>
                    <Text>Total do pedido</Text>
                    <Text style={styles.totalValor}>R$ {total.toFixed(2).replace('.', ',')}</Text>
                </View>
                <Pressable
                    style={styles.botao}
                    onPress={() => router.push({pathname: '/pagamento', params: {total: total.toString()}})}
                >
                    <Text style={styles.botaoTexto}>Finalizar compra</Text>
                </Pressable>
            </View>
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
        marginHorizontal: 16,
        marginBottom: 16,
    },
    imagemItem: {
        width: 44,
        height: 44,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    nomeItem: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#202020',
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    stepperBotao: {
        fontSize: 16,
        color: '#E91E8C',
        paddingHorizontal: 6,
    },
    stepperValor: {
        marginHorizontal: 10,
    },
    precoItem: {
        fontWeight: 'bold',
        color: '#202020',
    },
    rodape: {
        borderTopWidth: 1,
        borderColor: '#eee',
        padding: 16,
    },
    linhaTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    totalValor: {
        fontWeight: 'bold',
        color: '#E91E8C',
    },
    botao: {
        backgroundColor: '#E91E8C',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CarrinhoScreen;
