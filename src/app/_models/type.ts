import { Tool } from './tool';
import { environment } from 'src/environments/environment';

export class Type {
    id: number;
    name: string;
    description: string;
    img: string;
    tools: Tool[];

    constructor(id: string, name: string, description: string, img: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.img = (img) ? environment.host + '/web/images/' + img : '/assets/img/axe.png';
        this.tools = [];
    }

    fillTools(tools: Tool[]) {
        this.tools = tools;
    }
}
