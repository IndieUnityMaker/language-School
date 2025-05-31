import type { ImageLesson, WordLesson } from "../../types/lesson-type";


export const getImageQuizLessons = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(imageLessons)
    }, 1000);
  })
}

export const getImageQuizLesson = (id: string) => {
  return new Promise((res) => {
    setTimeout(() => {
      const lesson = imageLessons.find((item) => item.id === id)
      res(lesson)
    }, 1000);
  })
}

export const getWordPuzzleLesson = (id: string): Promise<WordLesson> => {
  return new Promise((res) => {
    setTimeout(() => {
      const lesson = wordLessons.find((item) => item.id === id)
      res(lesson as WordLesson)
    }, 1000);
  })
}

const wordLessons: WordLesson[] = [
  {
    id: 'lesson-1',
    title: 'Animals',
    level: 'beginner',
    questions: [
      {
        id: 'q1',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        correctAnswer: {
          text: 'fox',
          translation: 'лиса'
        },
        letters: ['o', 'f', 'x'],
        prefilledId: [1],
      },
      {
        id: 'q2',
        image: 'https://images.unsplash.com/photo-1529040181623-e04ebc611e25?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        correctAnswer: {
          text: 'rabbit',
          translation: 'Кролик'
        },
        letters: ['r', 't', 'b', 'i', 'b', 'a'],
        prefilledId: [3],
      },
      {
        id: 'q3',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        correctAnswer: {
          text: 'fox',
          translation: 'лиса'
        },
        letters: ['o', 'f', 'x'],
        prefilledId: [1],
      },
    ]
  }
]

const imageLessons: ImageLesson[] = [
  {
    "id": "lesson-1",
    "title": "Animals",
    "level": "beginner",
    "questions": [
      {
        "id": "q1",
        "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "correctAnswer": {
          "text": "fox",
          "transcription": "/fɒks/",
          "translation": "лиса"
        },
        "options": [
          {
            "text": "cat",
            "transcription": "/kæt/"
          },
          {
            "text": "fox",
            "transcription": "/fɒks/"
          },
          {
            "text": "bird",
            "transcription": "/bɜːd/"
          },
          {
            "text": "chubaka",
            "transcription": "/chiubaka/"
          }
        ]
      },
      {
        "id": "q2",
        "image": "https://images.unsplash.com/photo-1529040181623-e04ebc611e25?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "correctAnswer": {
          "text": "rabbit",
          "transcription": "/rabbit/",
          "translation": "Кролик"
        },
        "options": [
          {
            "text": "cat",
            "transcription": "/kæt/"
          },
          {
            "text": "dog",
            "transcription": "/dɒɡ/"
          },
          {
            "text": "rabbit",
            "transcription": "/rabbid/"
          },
          {
            "text": "fox",
            "transcription": "/fɒks/"
          },
        ]
      },
      {
        "id": "q3",
        "image": "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "correctAnswer": {
          "text": "raccoon",
          "transcription": "/raccoon/",
          "translation": "Енот"
        },
        "options": [
          {
            "text": "raccoon",
            "transcription": "/raccoon/"
          },
          {
            "text": "dog",
            "transcription": "/dɒɡ/"
          },
          {
            "text": "bird",
            "transcription": "/bɜːd/"
          },
          {
            "text": "rabbit",
            "transcription": "/rabbid/"
          },
        ]
      },
    ]
  },
  {
    "id": "lesson-2",
    "title": "Animals",
    "level": "beginner",
    "questions": [
      {
        "id": "q1",
        "image": "https://example.com/images/cat.jpg",
        "correctAnswer": {
          "text": "cat",
          "transcription": "/cat/",
          "translation": "собака"
        },
        "options": [
          {
            "text": "cat",
            "transcription": "/kæt/"
          },
          {
            "text": "dog",
            "transcription": "/dɒɡ/"
          },
          {
            "text": "bird",
            "transcription": "/bɜːd/"
          }
        ]
      }
    ]
  }
]