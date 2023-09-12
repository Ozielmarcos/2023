import Box from "./components/box"
import Title from "./components/title"
import xbox from './assets/xbox.png'
import play from './assets/playstation.jpg'
import nintendo from './assets/nintendo.jpg'
import { gamesList } from "./data/gamesList"
import Span from "./components/span"
import { useState } from "react"


function App() {
  const [list, setList] = useState(gamesList)

  const handleFilter = (plataforma: string) => {
    setList(gamesList.filter((game) => game.plataforma === plataforma))
  }
  return (
    <Box display="flex"
      align="center"
      justify="center"
      bg="#242424"
      width="100%"
      height="100vh"
    >
      <Box bg="#DADADA"
        width="40%"
        height="90vh"
        borderRadius="10px">
        <Title content="Lista de jogos" />
        <Box width="65%" height="100%" margin="0 auto">
          <Box width="100%" height="90px" margin="0 0 20px 0 " bg="#232323">
            <Box display="flex" justify="space-around" align="center">
              <button style={{
                width: '150px',
                padding: '10px 0',
                fontWeight: 'bold',
                margin: '3px 0 0 0',
                fontSize: '18px',
                color: '#FFF',
                backgroundColor: '#107c10',
                cursor: 'pointer',
              }}
                onClick={() => handleFilter('xbox')}>XBOX</button>
              <button style={{
                width: '150px',
                padding: '10px 0',
                fontWeight: 'bold',
                margin: '3px 0 0 0',
                fontSize: '18px',
                color: '#FFF',
                backgroundColor: '#1C68AE',
                cursor: 'pointer'
              }}
                onClick={() => handleFilter('playstation')}>PlayStation</button>
              <button style={{
                width: '150px',
                padding: '10px 0',
                fontWeight: 'bold',
                margin: '3px 0 0 0',
                fontSize: '18px',
                color: '#FFF',
                backgroundColor: '#E70012',
                cursor: 'pointer'
              }}
                onClick={() => handleFilter('nintendo')}>Nintendo</button>
            </Box>
            <Box width="97%" margin="5px auto" display="flex" justify="center">
              <button style={{
                width: '100%',
                margin: 'auto',
                padding: '5px 0',
                fontWeight: 'bold',
                fontSize: '18px',
                cursor: 'pointer'
              }}
                onClick={() => setList(gamesList)}>Limpar Filtro</button>
            </Box>
          </Box>
          {list.map((game) => (
            <Box key={game.id}
              bg="#232323"
              height="50px"
              margin="0 0 10px 0"
              display="flex"
              align="center"
              columnGap="10px">
              <img src={game.plataforma === 'xbox' ? xbox : game.plataforma === 'playstation' ? play
                : nintendo} width={50} />
              <Span color="#fff" fontSize="20px" content={game.nome} />
            </Box>))}

        </Box>
      </Box>
    </Box>
  )
}

export default App
