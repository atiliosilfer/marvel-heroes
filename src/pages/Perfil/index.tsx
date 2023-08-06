import * as Tabs from '@radix-ui/react-tabs'
import { TabsList, TabsTrigger } from './styles'
import { Overview } from './components/Overview'
import { InfoList } from './components/InfoList'

export function Perfil() {
  return (
    <>
      <h1>Perfil / A-Bomb</h1>

      <Tabs.Root defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Visão Geral</TabsTrigger>
          <TabsTrigger value="tab2">Teams</TabsTrigger>
          <TabsTrigger value="tab3">Powers</TabsTrigger>
          <TabsTrigger value="tab4">Species</TabsTrigger>
          <TabsTrigger value="tab5">Authors</TabsTrigger>
        </TabsList>
        <Tabs.Content className="TabsContent" value="tab1">
          <Overview />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <InfoList infoList={['aaaa', 'bbb']} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab3">
          <InfoList infoList={['aaaa', 'bbb']} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab4">
          <InfoList infoList={['aaaa', 'bbb']} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab5">
          <InfoList infoList={['aaaa', 'bbb']} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
