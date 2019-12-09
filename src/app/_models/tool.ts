import { environment } from 'src/environments/environment';

export class Tool {
    id: number;
    name: string;
    description: string;
    price: number;
    img: string;
    typeId: number;

    constructor(id: string, name: string, description: string, price: string, img: string, type_id: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.price = Number.parseInt(price);
        this.img = (img) ? environment.host + '/web/images/' + img : '/assets/img/axe.png';
        this.typeId = Number.parseInt(type_id);
    }
}
