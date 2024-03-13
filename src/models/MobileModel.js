class MobileModel {
    constructor(productName, description, processor, price, manufacturer, screen_type) {
        this.productName = productName;
        this.description = description;
        this.processor = processor;
        this.price = price;
        this.manufacturer = manufacturer;
        this.screen_type = screen_type;
    }
}

module.exports = MobileModel;