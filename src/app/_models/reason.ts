export class Reason {
    id: number;
    title: string;
    description: string;
    img: string;

    constructor (id: string, title: string, description: string, img: string) {
        this.id = Number.parseInt(id);
        this.title = title;
        this.description = description;
        this.img = img;
    }
}
