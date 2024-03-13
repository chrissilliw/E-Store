class MobileModel {
    constructor(id, attributes) {
        this.id = id;
        this.productName = attributes.productName;
        this.description = attributes.description;
        this.processor = attributes.processor;
        this.price = attributes.price;
        this.manufacturer = attributes.manufacturer;
    }
}

module.exports = MobileModel;