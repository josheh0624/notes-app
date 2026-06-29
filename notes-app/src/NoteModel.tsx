import React from "react";

export interface Note {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
  updatedAt: number;
}