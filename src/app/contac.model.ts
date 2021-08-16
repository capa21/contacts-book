export class Contact {
  constructor(
    public id:number,
    public name: string,
    public picture?:string,
    public phones?: ContactPhone[],
    public email?: string,
    public address?: string,
  ){}
}

export enum PhoneType {
  mobile = 'mobile',
  home = 'home',
  work = 'work'
}

export interface ContactPhone {
  type: PhoneType;
  number: number
}
