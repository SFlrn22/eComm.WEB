import { ImageSearchResult } from './ImageSearchResult';

export interface ImageSource {
  imageUrl: string;
  resultList: ImageSearchResult[];
}
