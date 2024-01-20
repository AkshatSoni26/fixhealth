export enum FormType {
    'name',
    'age',
    'complaint',
    'experience',
    'realted_doctors'
}

export interface FormParams {
    onClick: (nextform: FormType) => void,
    setAge?: (age: string) => void,
    setCity?: (age: string) => void,
    age?: string,
    city?: string,
}

export interface doctor {
    city: string,
    expertise: string,
    img_url: string,
    name: string
}

