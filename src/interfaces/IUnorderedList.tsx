import {Prediction} from './IPredictions';

export interface UnorderedListComponentProps {
  predictions: Prediction[];
  openModal: (description: string) => void;
}
