export interface ThemeDataType {
  type: string;
  primary: string;
  quaternary: string;
  quaternaryLight: string;
  secondary: string;
  tertiary: string;
  buttonColor: string;
  contactsimg: any;
}

export interface AboutDataType {
  title: string;
  description1: string;
  description2: string;
  image: number;
}

export interface BlogDataType {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
}

export interface ContactsData {
  email: string;
  phone: string;
  address: string;
  sheetAPI: string;
}

export interface EducationData {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceDataType {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
}

export interface HeaderDataType {
  name: string;
  title: string;
  desciption: string;
  image: string;
  imagebw: string;
  resumePdf: string;
}

export interface SocialsDataType {
  github: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  medium: string;
  stackOverflow: string;
  mail: string;
  youtube: string;
}

export interface ProjectDataType {
  id: number;
  projectName: string;
  projectDesc: string;
  tags: string[];
  code: string;
  demo: string;
  image: any;
}

export interface ProjectCardPops {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: any;
  theme: ThemeDataType;
}

export interface BlogCardPops {
  theme: ThemeDataType;
  title: string;
  desc: string;
  date: string;
  image: string;
  url: string;
  id: number;
}

export interface BlogPageUIProps {
  theme: ThemeDataType;
  classes: any;
  filteredArticles: BlogDataType[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

export interface ContactUIPops {
  open: boolean;
  success: boolean;
  errMsg: string;
  handleClose: any;
  classes: any;
  handleContactForm: any;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  form: any;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface EducationCardPops {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}
