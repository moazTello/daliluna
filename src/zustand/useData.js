import { create } from "zustand";
const useDataStore = create((set) => ({
  classifieds: [],
  setClassifieds: (classifieds) => set({ classifieds }),
  classifiedsDepartments: [],
  setClassifiedsDepartments: (classifiedsDepartments) =>
    set({ classifiedsDepartments }),
  classifiedsDepartmentFields: [],
  setClassifiedsDepartmentFields: (classifiedsDepartmentFields) =>
    set({ classifiedsDepartmentFields }),
  yellowPages: [],
  setYellowPages: (yellowPages) => set({ yellowPages }),
  yellowPagesDepartments: [],
  setYellowPagesDepartments: (yellowPagesDepartments) =>
    set({ yellowPagesDepartments }),
  field:[],
  setField:(field) => set({field}),
  countries: [],
  setCountries: (countries) => set({ countries }),
  cities: [],
  setCities: (cities) => set({ cities }),
  provinces: [],
  setProvinces: (provinces) => set({ provinces }),
  posts: [],
  setPosts: (posts) => set({ posts }),
  elements: [],
  setElements: (elements) => set({ elements }),
  setRestField:(field) => set({
      name:null,
      placeholder:null,
      min:null,
      max:null,
      type:null,
      required:null,
      searched:null,
      values:[]
  }),
  yellowPagesServices:[],
  setYellowPagesServices: (yellowPagesServices) => set({ yellowPagesServices }),
  currencies:[],
  setCurrencies: (currencies) => set({ currencies }),
  lang:[],
  setLang: (lang) => set({ lang }),
  blogs:[],
  setBlogs: (blogs) => set({ blogs }),

  // {
  //   name:null,
  //   placeholder:null,
  //   min:null,
  //   max:null,
  //   type:null,
  //   required:null,
  //   searched:null,
  //   values:[]
  // }

}));

export default useDataStore;
