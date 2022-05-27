export interface IHeader {
  menuActive?: string;
  className?: string;
}

export interface IMenuItem {
  id: string;
  link: string;
  children?: IMenuItem[];
  name: string;
}