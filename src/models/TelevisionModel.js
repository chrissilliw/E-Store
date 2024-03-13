class TelevisionModel {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.Name;
        this.description = attributes.Description;
        this.screen_size = attributes.screen_size;
        this.price = attributes.price;
        this.manufacturer = attributes.manufacturer;
    }
}

module.exports = TelevisionModel;