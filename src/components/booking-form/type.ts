export enum FormType {
    'name',
    'age',
    'complaint',
    'experience',
    'realted_doctors'
}

export interface FormParams {
    onClick: (nextform: FormType) => void,
    setAge?: (age:string) => void,
    age?: string,
}

