import {ApiQianQian} from "cms/types/generated/contentTypes";

export type StrapiObject = { id: number, documentId: string };

export type StrapiResponse<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export type ImageFormat = {
  url: string;
  width: number;
  height: number;
}
export type ImageItem = ImageFormat & {
  alternativeText: string;
  caption: string;
  ext: string;
  formats: {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
  };
}

export type Qian = ApiQianQian["attributes"] & StrapiObject & {
  date: string;
  thumbnail: ImageItem;
};
