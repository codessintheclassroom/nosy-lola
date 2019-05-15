export default interface Pet {
    readonly id: string;
    name: string;
    description: string;
    kind: string;
    breed: string;
    photos: Array<string>;
};