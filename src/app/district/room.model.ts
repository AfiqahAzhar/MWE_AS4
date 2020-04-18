export class Room {
    constructor(public id: string,
                public title: string,
                public image: string,
                public guest: number,
                public bedroom: number,
                public kitchen: number,
                public park: number,
                public description: string,
                public price: number
                ) {}
}
