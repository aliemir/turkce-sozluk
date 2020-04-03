import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import homeContext from './context/home'
import resultsContext from './context/results'
import { getHomeData, getDetailData } from './utils/api'

import theme from './utils/theme'
import Navigation from './navigation'

const App = () => {
  const [homeData, setHomeData] = useState({})
  const [results, setResults] = useState({})

  const homeValues = {
    data: homeData,
    setData: async () => {
      getHomeData()
        .then(pure => {
          const data = {
            kelime: {
              madde: pure.kelime[0].madde,
              anlam: pure.kelime[0].anlam,
            },
            atasoz: {
              madde: pure.atasoz[0].madde,
              anlam: pure.atasoz[0].anlam,
            },
          }
          setHomeData(data)
        })
        .catch(err => {
          console.log('error when fetching home data: ', err)
        })
    },
  }

  const resultsValues = {
    data: results,
    clearResults: () => {
      setResults({})
    },
    getResults: async keyword => {
      getDetailData(keyword)
        .then(res => {
          console.log('results values', res)
          setResults(res[0])
        })
        .catch(err => {
          console.log('error when fetching results: ', err)
        })
    },
  }

  return (
    <resultsContext.Provider value={resultsValues}>
      <homeContext.Provider value={homeValues}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </homeContext.Provider>
    </resultsContext.Provider>
  )
}

export default App
