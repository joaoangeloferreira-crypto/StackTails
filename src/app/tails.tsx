import { useRouter } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import Botao from '../../components/Botao'
import styles from '../../constants/styles'

export default function Tails() {
    const router = useRouter()

    return (
        <View style={[styles.centralizado, localStyles.wrapper]}>
            <View style={localStyles.card}>
                <Text style={localStyles.badge}>StackTails</Text>
                <Text style={localStyles.titulo}>Tela Nova</Text>
                <Text style={localStyles.subtitulo}>
                    Sua experiência está pronta para continuar com um toque mais moderno.
                </Text>

                <Botao onPress={() => router.push('/')} fullWidth>
                    Voltar para início
                </Botao>

                <Botao onPress={() => router.push('/')} variant="secondary" fullWidth>
                    Continuar
                </Botao>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    wrapper: {
        padding: 24,
    },

    card: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: 'rgba(15, 23, 42, 0.78)',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: 'rgba(167, 139, 250, 0.35)',
        padding: 28,
        shadowColor: '#0F172A',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.35,
        shadowRadius: 24,
        elevation: 12,
    },

    badge: {
        alignSelf: 'flex-start',
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: '#C4B5FD',
        marginBottom: 12,
    },

    titulo: {
        fontSize: 32,
        fontWeight: '800',
        color: '#F8FAFC',
        marginBottom: 8,
    },

    subtitulo: {
        fontSize: 15,
        color: '#CBD5E1',
        lineHeight: 22,
        marginBottom: 22,
    },
})