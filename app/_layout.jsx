import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={require('../assets/images/home.svg')} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="pomodoro">
          <NativeTabs.Trigger.Label>Timer</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="tarefas">
          <NativeTabs.Trigger.Label>Timer</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </SafeAreaView>
  )
}
