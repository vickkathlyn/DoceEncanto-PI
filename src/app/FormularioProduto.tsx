import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

/**
 * Novo produto
 * Formulário de cadastro/edição de produto (uso da administradora)
 */

const FormularioProdutoScreen = () => {
    const router = useRouter();

    const CATEGORIAS = ['Bolo', 'Doce', 'Salgado'];

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState(CATEGORIAS[0]);

    const salvar = () => {
        console.log({nome, descricao, preco, categoria});
        router.back();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Pressable onPress={() => router.back()}>
                    <Text style={styles.voltar}>‹</Text>
                </Pressable>

                <Text style={styles.titulo}>Novo produto</Text>

                <Text style={styles.rotulo}>Nome do produto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Bolo Red Velvet de Casamento"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.rotulo}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.textoArea]}
                    placeholder="Massa aveludada, recheio de cream cheese doce..."
                    multiline={true}
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Text style={styles.rotulo}>Preço (R$)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: R$ 89,90"
                    value={preco}
                    onChangeText={setPreco}
                />

                <Text style={styles.rotulo}>Categoria</Text>
                <View style={styles.linhaCategorias}>
                    {CATEGORIAS.map((cat) => (
                        <Pressable
                            key={cat}
                            style={[styles.chip, categoria === cat && styles.chipAtivo]}
                            onPress={() => setCategoria(cat)}
                        >
                            <Text style={categoria === cat ? styles.chipTextoAtivo : styles.chipTexto}>{cat}</Text>
                        </Pressable>
                    ))}
                </View>

                <Text style={styles.rotulo}>Foto do produto</Text>
                <Pressable style={styles.uploadBox}>
                    <Text style={styles.uploadTexto}>Carregar imagem do doce</Text>
                </Pressable>

                <Pressable style={styles.botao} onPress={salvar}>
                    <Text style={styles.botaoTexto}>Salvar</Text>
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
    voltar: {
        fontSize: 26,
        marginBottom: 8,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#202020',
    },
    rotulo: {
        fontSize: 13,
        marginTop: 12,
        marginBottom: 4,
        color: '#5A5A5A',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eee',
        padding: 12,
    },
    textoArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    linhaCategorias: {
        flexDirection: 'row',
    },
    chip: {
        borderWidth: 1,
        borderColor: '#E91E8C',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
        marginRight: 8,
    },
    chipAtivo: {
        backgroundColor: '#E91E8C',
    },
    chipTexto: {
        color: '#E91E8C',
    },
    chipTextoAtivo: {
        color: 'white',
    },
    uploadBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 24,
        alignItems: 'center',
    },
    uploadTexto: {
        color: '#999',
    },
    botao: {
        backgroundColor: '#E91E8C',
        borderRadius: 25,
        padding: 14,
        alignItems: 'center',
        marginTop: 24,
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default FormularioProdutoScreen;