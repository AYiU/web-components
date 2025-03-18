export interface IPageInfo {
  url: string;
  title: string;
  description: string;
}

export interface ILink {
  url: string;
  title: string;
}

export type IMenuItem = ILink & {
  children?: IMenuItem[];
};
