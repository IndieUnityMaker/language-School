export type ImageQuestion = {
  id: string;
  image?: string;
  correctAnswer: {
    text: string;
    transcription: string;
    translation: string;
  };
  options: {
    text: string;
    transcription: string;
  }[];
};

export type WordQuestion = {
  id: string;
  image?: string;
  correctAnswer: {
    text: string;
    translation: string;
  };
  letters: string[];
  prefilledId: number[];
};