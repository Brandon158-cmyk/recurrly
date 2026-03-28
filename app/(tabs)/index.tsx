import '@/global.css';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-5xl font-sans-extrabold">
                Home
            </Text>
            <Link className='mt-4 font-sans-bold rounded bg-primary text-white p-4' href="/onboarding">
                Go to Onboarding
            </Link>
            <Link className='mt-4 font-sans-bold rounded bg-primary text-white p-4' href="/(auth)/sign-up">
                Sign Up
            </Link>
            <Link className='mt-4 font-sans-bold rounded bg-primary text-white p-4' href="/(auth)/sign-in">
                Sign In
            </Link>
           
        </SafeAreaView>
    );
}