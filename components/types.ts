export interface ILink {
  url: string;
  title: string;
}

export interface IPageInfo extends ILink {
  description: string;
}

export interface IMenuItem extends ILink {
  children?: IMenuItem[];
};
