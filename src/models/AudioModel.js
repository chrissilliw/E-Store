class AudioModel {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.Name;
        this.description = attributes.Description;
        this.effect = attributes.effect;
        this.price = attributes.price;
        this.manufacturer = attributes.manufacturer;
    }
}

module.exports = AudioModel;