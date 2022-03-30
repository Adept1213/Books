import { Dispatch } from "react";

export interface IBook {
  id: number;
  name: string;
  author: string;
  numberPage: number;
  yearWriting: number;
  isOpen: boolean;
}

export interface IBookShow {
  id: number;
  name: string;
  author: string;
  isOpen: boolean;
}

export interface IInput {
  onlyNNumber?: boolean;
  placeholder: string;
  isError?: boolean;
  errorText?: string;
  value: string | number;
  setValue: Dispatch<React.SetStateAction<string>>;
}

export enum SortStatus {
  increaseForName = "increaseForName",
  decreaseForName = "decreaseForName",
  increaseForAuthor = "increaseForAuthor",
  decreaseForAuthor = "decreaseForAuthor",
  resetForFunction = "resetForFunction",
}
