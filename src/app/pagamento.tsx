import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

/**
 * Finalizar pagamento
 * Seleção do meio de pagamento e confirmação do pedido
 */

const PagamentoScreen = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const total = params.total ? Number(params.total) : 48.7;

    const METODOS = ['Cartão de Crédito', 'Pix (Aprovação imediata)', 'Boleto Bancário'];

    const [metodo, setMetodo] = useState(METODOS[0]);

    const confirmar = () => {
        console.log({metodo, total});
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.cabecalho}>
                    <Pressable onPress={() => router.back()}>
                        <Text style={styles.voltar}>‹</Text>
                    </Pressable>
                    <Text style={styles.titulo}>Finalizar pagamento</Text>
                    <View style={{width: 24}}/>
                </View>

                <View style={styles.resumo}>
                    <Text>3 deliciosos doces selecionados</Text>
                    <Text style={styles.total}>R$ {total.toFixed(2).replace('.', ',')}</Text>
                </View>

                <Text style={styles.rotulo}>Selecione o meio de pagamento:</Text>
                {METODOS.map((item) => (
                    <Pressable
                        key={item}
                        style={[styles.metodo, metodo === item && styles.metodoAtivo]}
                        onPress={() => setMetodo(item)}
                    >
                        <Text>{item}</Text>
                    </Pressable>
                ))}

                {metodo === 'Cartão de Crédito' && (
                    <View>
                        <Text style={styles.rotulo}>Número do cartão</Text>
                        <TextInput style={styles.input} placeholder="0000 0000 0000 0000"/>

                        <Text style={styles.rotulo}>Nome do titular</Text>
                        <TextInput style={styles.input} placeholder="Como gravado no cartão"/>

                        <View style={styles.linhaDupla}>
                            <TextInput style={[styles.input, styles.metade]} placeholder="MM/AA"/>
                            <TextInput style={[styles.input, styles.metade]} placeholder="CVV"/>
                        </View>
                    </View>
                )}

                <Pressable style={styles.botao} onPress={confirmar}>
                    <Text style={styles.botaoTexto}>Confirmar pagamento</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF1F6',
    },
    scroll: {
        padding: 24,
    },
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    voltar: {
        fontSize: 26,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#202020',
    },
    resumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
    },
    total: {
        fontWeight: 'bold',
        color: '#E91E8C',
    },
    rotulo: {
        fontSize: 13,
        marginTop: 12,
        marginBottom: 6,
        color: '#5A5A5A',
    },
    metodo: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    metodoAtivo: {
        borderColor: '#E91E8C',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 12,
        marginBottom: 8,
    },
    linhaDupla: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metade: {
        width: '48%',
    },
    botao: {
        backgroundColor: '#E91E8C',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
        marginTop: 20,
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PagamentoScreen;