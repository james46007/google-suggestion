import {Prediction} from '../api-google/IPredictions';

export interface UnorderedListComponentProps {
  predictions: Prediction[];
  openModal: (description: string) => void;
}
