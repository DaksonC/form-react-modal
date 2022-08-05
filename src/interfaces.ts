export interface IUsers{
    map(arg0: (users: IUsers) => JSX.Element): import("react").ReactNode;
    id: number;
    nome: string;
    email: string;
    language: string;
}

