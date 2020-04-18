export class Booking {
    constructor(public id: string,
                public name: string,
                public ic: string,
                public phoneno: string,
                public availableFrom: Date,
                public availableTo: Date) {}
}

export class Payment {
    constructor(public id: string,
                public cardHolderName: string,
                public cardNumber: string,
                public expiry: Date,
                public cvc: number) {}
}


