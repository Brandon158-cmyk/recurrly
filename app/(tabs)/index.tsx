import '@/global.css';
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/(auth)/sign-in">Sign In</Link>
            <Link href="/(auth)/sign-up">Sign Up</Link>
            <Link href="/onboarding">Onboarding</Link>
            <Link href={{ pathname: '/(tabs)/subscriptions/[id]', params: { id: 'spotify' } }}>
                Spotify Subscription
            </Link>
        </View>
    );
}