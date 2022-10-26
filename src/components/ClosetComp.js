import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import GraphColor from './GraphColor'
import GraphBrand from './GraphBrand'
import GraphCategory from './GraphCategory'
import GraphSource from './GraphSource'

export const ClosetComp = ({ token, loading, setLoading }) => {
  const [comp, setComp] = useState(null)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://stylehub.herokuapp.com/closet-composition/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setComp(res.data)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

    return (
      <div className="graphs-container">
      { comp &&
        <>
        <GraphCategory comp={comp} />
        <GraphColor comp={comp} />
        <GraphBrand comp={comp} />
        <GraphSource comp={comp} />
        </>
      }
      </div>
    )
}
