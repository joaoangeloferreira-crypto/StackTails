import React from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    type GestureResponderEvent,
} from 'react-native'

export interface BotaoProps {
    children: React.ReactNode
    onPress?: (event: GestureResponderEvent) => void
}

export default function Botao({ children, onPress }: BotaoProps) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.botao,
                    pressed && styles.pressionado,
                ]}
            >
                <View style={styles.brilho} />

                <Text style={styles.texto}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    botao: {
        minHeight: 55,
        paddingHorizontal: 24,
        borderRadius: 16,

        backgroundColor: '#6366F1',

        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#4F46E5',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,

        elevation: 8,

        overflow: 'hidden',
    },

    pressionado: {
        transform: [
            { scale: 0.96 },
            { translateY: 2 },
        ],
        shadowOpacity: 0.15,
        elevation: 3,
    },

    brilho: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,

        backgroundColor: '#A5B4FC',
        opacity: 0.8,
    },

    texto: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
})