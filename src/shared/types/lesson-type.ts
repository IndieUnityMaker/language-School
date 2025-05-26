import type { ImageQuestion, WordQuestion } from "./question-type";

export type ImageLesson = {
  id: string;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  questions: ImageQuestion[];
};

export type WordLesson = {
  id: string;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  questions: WordQuestion[];
};