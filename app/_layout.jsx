import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { ProvedorTarefas } from '../components/context/taskProvider';

export default function TabLayout() {
  return (
    <ProvedorTarefas>
      <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="criarTarefa">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Criar tarefa</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tarefas">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Tarefas</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    </ProvedorTarefas>
  );
}
