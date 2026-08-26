import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import Botao from '../../components/Botao'
import styles from '../../constants/styles'

export default function Index() {
    const router = useRouter()

    return (
        <View style={[styles.centralizado, { gap: 20 }]}>
            <Text style={styles.centralizado}>
                Tela Inicial
            </Text>

            <Botao
                onPress={() => router.push('/tails' as never)}
            >
                Ir para Tela Nova
            </Botao>

            <Botao
                onPress={() => console.log('Botão clicado!')}
            >
                Começar
            </Botao>
        </View>
    )
}
