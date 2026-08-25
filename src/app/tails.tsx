import Botao from '../../components/Botao'
import styles from '../../constants/styles'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function Nova() {
    const router = useRouter()

    return (
        <View style={[styles.centralizado, { gap: 20 }]}>
            <Text style={styles.centralizado}>
                Tela Nova
            </Text>

            <Botao onPress={() => router.push('/')}>
                Voltar
            </Botao>
        </View>
    )
}