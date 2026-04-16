import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProvedorTarefas } from '../components/context/taskProvider';

export default function Layout() {
  return (
    <ProvedorTarefas>
      <SafeAreaView style={{ flex: 1 }}>
      <NativeTabs
        style={{ flex: 1 }}
      >
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
        <NativeTabs.Trigger name="criarTarefa">
          <NativeTabs.Trigger.Label>Timer</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </SafeAreaView>
    </ProvedorTarefas>
  )
}
