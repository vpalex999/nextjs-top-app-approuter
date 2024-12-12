export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface HomeProps {
  menu: MenuItem[];
  firstCategory: number;
}

// export interface FirstLevelMenuItem {
//   route: string;
//   name: string;
//   icon: JSX.Element;
//   id: TopLevelCategory;
// }
