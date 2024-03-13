class ComputerModel {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.Name;
        this.description = attributes.Description;
        this.processor = attributes.processor;
        this.price = attributes.price;
        this.manufacturer = attributes.manufacturer;
    }
}

module.exports = ComputerModel;