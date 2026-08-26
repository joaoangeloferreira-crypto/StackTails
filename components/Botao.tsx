import React from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    type GestureResponderEvent,
    type StyleProp,
    type ViewStyle,
} from 'react-native'

export interface BotaoProps {
    children: React.ReactNode
    onPress?: (event: GestureResponderEvent) => void
    variant?: 'primary' | 'secondary'
    fullWidth?: boolean
    disabled?: boolean
    style?: StyleProp<ViewStyle>
}

export default function Botao({
    children,
    onPress,
    variant = 'primary',
    fullWidth = false,
    disabled = false,
    style,
}: BotaoProps) {
    const estiloPrincipal = variant === 'primary' ? styles.primario : styles.secundario
    const estiloPressionado = variant === 'primary' ? styles.pressionadoPrimario : styles.pressionadoSecundario

    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.botao,
                fullWidth && styles.larguraTotal,
                estiloPrincipal,
                disabled && styles.desabilitado,
                pressed && !disabled && estiloPressionado,
                style,
            ]}
        >
            <Text style={[styles.texto, variant === 'secondary' && styles.textoSecundario]}>
                {children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        minHeight: 56,
        paddingHorizontal: 22,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginVertical: 8,
        shadowColor: '#111827',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.22,
        shadowRadius: 16,
        elevation: 8,
    },

    larguraTotal: {
        width: '100%',
    },

    primario: {
        backgroundColor: '#7C3AED',
        borderColor: '#A78BFA',
    },

    secundario: {
        backgroundColor: 'rgba(15, 23, 42, 0.55)',
        borderColor: 'rgba(148, 163, 184, 0.35)',
    },

    pressionadoPrimario: {
        transform: [{ scale: 0.98 }, { translateY: 1 }],
        shadowOpacity: 0.08,
        elevation: 4,
        backgroundColor: '#6D28D9',
    },

    pressionadoSecundario: {
        transform: [{ scale: 0.98 }, { translateY: 1 }],
        shadowOpacity: 0.08,
        elevation: 4,
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
    },

    desabilitado: {
        opacity: 0.5,
    },

    texto: {
        color: '#F8FAFC',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.4,
    },

    textoSecundario: {
        color: '#E2E8F0',
    },
})