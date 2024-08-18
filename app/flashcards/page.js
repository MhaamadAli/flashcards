'use client'

import { useEffect, useState } from 'react'
import { Container, Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useRouter } from 'next/navigation'

export default function Flashcards() {
  const [flashcardSets, setFlashcardSets] = useState([])
  const router = useRouter()

  useEffect(() => {
    async function getFlashcardSets() {
      // Replace 'flashcardSets' with the actual collection path if different
      const setsCollectionRef = collection(db, 'flashcardSets')
      const querySnapshot = await getDocs(setsCollectionRef)
      
      const sets = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      
      setFlashcardSets(sets)
    }
    getFlashcardSets()
  }, [])

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`)
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcardSets.map((set) => (
          <Grid item xs={12} sm={6} md={4} key={set.id}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(set.id)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {set.id}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
