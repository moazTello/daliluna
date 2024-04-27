import { create } from "zustand";
const useDataStore = create((set) => ({
    classifieds:[],
    setClassifieds:(classifieds) => set({classifieds}),
    classifiedsDepartments:[],
    setClassifiedsDepartments:(classifiedsDepartments) => set({classifiedsDepartments}),
    classifiedsDepartmentFields:[],
    setClassifiedsDepartmentFields:(classifiedsDepartmentFields) => set({classifiedsDepartmentFields}),
    yellowPages:[],
    setYellowPages:(yellowPages) => set({yellowPages}),
    yellowPagesDepartments:[],
    setYellowPagesDepartments:(yellowPagesDepartments) => set({yellowPagesDepartments}),
    countries:[],
    setCountries:(countries) => set({countries}),
    cities:[],
    setCities:(cities) => set({cities}),
    provinces:[],
    setProvinces:(provinces) => set({provinces}),
    posts:[],
    setPosts:(posts) => set({posts}),
    elements:[],
    setElements:(elements) => set({elements}),
}));

export default useDataStore;