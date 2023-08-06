import * as Tabs from '@radix-ui/react-tabs'
import { TabsList, TabsTrigger, Title } from './styles'
import { Overview } from './components/Overview'
import { InfoList } from './components/InfoList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetCharacter } from '../../service/marvelAPI'
import { CharacterType } from '../Home'

export function Perfil() {
  const { id } = useParams()
  const [character, setCharacter] = useState<CharacterType>()

  useEffect(() => {
    GetCharacter(Number(id) || 123).then((response) => {
      setCharacter(response.data.data.results[0] as CharacterType)
    })
  }, [id])

  return (
    <>
      {character && (
        <>
          <Title>
            Perfil <span>/</span> <span>{character.name}</span>
          </Title>

          <Tabs.Root defaultValue="tab1">
            <TabsList aria-label="Manage your account">
              <TabsTrigger value="tab1">Visão Geral</TabsTrigger>
              <TabsTrigger value="tab2">Comics</TabsTrigger>
              <TabsTrigger value="tab3">Series</TabsTrigger>
              <TabsTrigger value="tab4">Stories</TabsTrigger>
              <TabsTrigger value="tab5">Events</TabsTrigger>
            </TabsList>
            <Tabs.Content className="TabsContent" value="tab1">
              <Overview character={character} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
              <InfoList infoList={character.comics.items} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab3">
              <InfoList infoList={character.series.items} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab4">
              <InfoList infoList={character.stories.items} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab5">
              <InfoList infoList={character.events.items} />
            </Tabs.Content>
          </Tabs.Root>
        </>
      )}
    </>
  )
}
