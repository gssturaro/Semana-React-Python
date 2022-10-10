import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/gssturaro.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/gssturaro.png",
      descricao: "Descrição do Professor 2",
      valor_hora: 100
    },
  ]

  return (
    <>
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
    </>
  )
}

export default Home
