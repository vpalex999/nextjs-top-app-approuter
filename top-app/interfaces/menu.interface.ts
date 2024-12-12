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

export interface Advantage {
  _id: string;
  title: string;
  description: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updateAt: Date;
}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel {
  tags: string[];
  _id: string;
  secondaryCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: Advantage[];
  createdAt: Date;
  updatedAt: Date;
  hh: HhData;
}

// export interface FirstLevelMenuItem {
//   route: string;
//   name: string;
//   icon: JSX.Element;
//   id: TopLevelCategory;
// }
