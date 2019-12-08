export class Testimonial {
    id: number;
    name: string;
    text: string;
    img: string;

    constructor(id: string, name: string, text: string, img: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.text = text;
        this.img = img;
    }
}
