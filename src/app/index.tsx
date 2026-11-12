import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const router = useRouter();
  return (

    
    <View style={styles.container}>

      {/* Ícone */}
      <View style={styles.iconCircle}>
        <Text style={styles.icon}>♧</Text>
      </View>

      {/* Título */}
      <Text style={styles.title}>Doce Encanto</Text>

      <Text style={styles.subtitle}>
        O sabor irresistível da confeitaria artesanal
      </Text>

      {/* Campo de e-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="maria@exemplo.com"
          placeholderTextColor="#B8AEB3"
          keyboardType="email-address"
        />
      </View>

      {/* Campo de senha */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Sua senha secreta"
          placeholderTextColor="#B8AEB3"
          secureTextEntry
        />
      </View>

      {/* Esqueci minha senha */}
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão entrar */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Cadastro */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Não tem uma conta?</Text>

        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text style={styles.registerLink}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
    paddingHorizontal: 32,
    justifyContent: 'center',
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFE5F0',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  icon: {
    fontSize: 30,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D91B72',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 11,
    color: '#8E858A',
    textAlign: 'center',
    marginBottom: 35,
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#514A4E',
    marginBottom: 7,
  },

  input: {
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8DDE2',
    borderRadius: 7,
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#333333',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -5,
    marginBottom: 30,
  },

  forgotText: {
    fontSize: 9,
    color: '#6F666B',
  },

  loginButton: {
    height: 44,
    backgroundColor: '#D91B72',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },

  registerText: {
    fontSize: 9,
    color: '#8E858A',
  },

  registerLink: {
    fontSize: 9,
    color: '#D91B72',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});