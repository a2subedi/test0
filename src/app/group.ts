export interface gameMaker{
    title:string;
    details:string;
}
export class Group{
    id:string;
    countries:string[];
    games?:gameMaker[];
}