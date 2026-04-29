import { Tabs } from 'expo-router';
import { Platform, View, StyleSheet } from 'react-native';
import { ProvedorTarefas } from '../components/context/taskProvider';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Ícones SVG simples como componentes React Native
function IconHome({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {/* Casa */}
      <View style={[styles.iconHouseRoof, { borderBottomColor: color }]} />
      <View style={[styles.iconHouseBody, { borderColor: color }]} />
    </View>
  );
}

function IconPlus({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.iconPlusH, { backgroundColor: color }]} />
      <View style={[styles.iconPlusV, { backgroundColor: color }]} />
    </View>
  );
}

function IconList({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
      <View style={[styles.iconListLine, { backgroundColor: color, width: size * 0.75 }]} />
      <View style={[styles.iconListLine, { backgroundColor: color, width: size * 0.55 }]} />
      <View style={[styles.iconListLine, { backgroundColor: color, width: size * 0.65 }]} />
    </View>
  );
}

function IconEdit({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.iconEditBody, { borderColor: color }]} />
      <View style={[styles.iconEditTip, { borderTopColor: color }]} />
    </View>
  );
}

const ACTIVE_COLOR = '#2f9c65';
const INACTIVE_COLOR = '#9E9E9E';
const TAB_BAR_BG = '#2b1108';

export default function TabLayout() {
  return (
    <ProvedorTarefas>
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: ACTIVE_COLOR,
          tabBarInactiveTintColor: INACTIVE_COLOR,
          tabBarStyle: {
            backgroundColor: TAB_BAR_BG,
            borderTopWidth: 0,
            elevation: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            height: Platform.OS === 'ios' ? 85 : 65,
            paddingBottom: Platform.OS === 'ios' ? 25 : 10,
            paddingTop: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarIconStyle: {
            marginBottom: -2,
          },
        }}
      >
        {/* ─── Home ─── */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <IconHome color={color} size={size} />
            ),
          }}
        />

        {/* ─── Criar Tarefa ─── */}
        <Tabs.Screen
          name="criarTarefa"
          options={{
            title: 'Criar',
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.createButton,
                  focused && styles.createButtonActive,
                ]}
              >
                <IconPlus color={focused ? '#fff' : color} size={20} />
              </View>
            ),
          }}
        />

        {/* ─── Tarefas ─── */}
        <Tabs.Screen
          name="tarefas"
          options={{
            title: 'Tarefas',
            tabBarIcon: ({ color, size }) => (
              <IconList color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="editarTarefa/[id]"
          options={{
            href: null,
            title: 'Editar',
          }}
        />
      </Tabs>
      </SafeAreaView>
      </SafeAreaProvider>
    </ProvedorTarefas>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b1108",
  },
  // Ícone: Casa
  iconHouseRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: -1,
  },
  iconHouseBody: {
    width: 14,
    height: 10,
    borderWidth: 2,
    borderTopWidth: 0,
  },

  // Ícone: Plus
  iconPlusH: {
    position: 'absolute',
    width: 18,
    height: 2.5,
    borderRadius: 2,
  },
  iconPlusV: {
    position: 'absolute',
    width: 2.5,
    height: 18,
    borderRadius: 2,
  },

  // Botão flutuante do "Criar"
  createButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
    shadowColor: ACTIVE_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  createButtonActive: {
    backgroundColor: ACTIVE_COLOR,
  },

  // Ícone: Lista
  iconListLine: {
    height: 2.5,
    borderRadius: 2,
  },

  // Ícone: Lápis/Editar
  iconEditBody: {
    width: 14,
    height: 14,
    borderWidth: 2,
    transform: [{ rotate: '45deg' }],
    marginBottom: -4,
  },
  iconEditTip: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
});