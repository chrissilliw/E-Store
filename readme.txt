# INTEGRATION MED STRAPI

# Ett API byggt i Node med Express och integreration med Strapi. 
# Innehåller fyra samlingar (collections) i Strapi: 
# "computers"
# "mobile devices"
# "audio devices"
# "televisions"

#Samtliga samlingar innehåller ett antal produkter. 

Projektstrukturen: 
/E-STORE
-/elctronics-strapi
-/src
--/controllers
--/models
--/routes
--/services
--/index.js

##### STARTA STRAPI INTEGRATION #####

# STRAPI KAN ENDAST KÖRAS MED ANTINGEN NODE VERSION 18 ELLER 20. 
# OM EN ANNAN INSTALLATION KÖRS BEHÖVER DU ÄNDRA TILL EN ANNAN INSTALLATION

# nvm use  v20.11.1

# SEDAN KÖR DU INSTALLTIONEN I DEVELOP

# cd electronics-strapi
# npm run develop

###### STARTA API I NODE MED EXPRESS --> src #####

# cd src
# nodemon index.js

##### Hur man använder programmet #####

# Programmet har inget gränssnitt utan har endast testat API:et via postman. 

# Via en webbläsare kan man göra GET-anrop: http://localhost:5005/

### Endpoints för samtliga samlingar ###

# Computers - http://localhost:5005/computers
# Mobile Devices - http://localhost:5005/mobile_devices
# Audio Devices http://localhost:5005/audio_devices
# Televisions - http://localhost:5005/televisions

# Går även att hämta indivduella produkter med id nr(/:id)

# Nedan är samtliga CRUD anrop som kan göras via postman

# Hämta samtliga datorer
# GET - http://localhost:5005/computers

# Hämta en specifik dator
# GET - http://localhost:5005/computers/:id

# Skapa en ny dator
# POST -  http://localhost:5005/computers
####################
{
    "data": {
        "Name": "string",
        "Description": "string",
        "Processor": "string",
        "Price": number,
        "Manufacturer": "string"
    }
}
####################

# Uppdatera en dator 
# PUT - http://localhost:1337/api/computers/:id
####################
{
    "data": {
        "Name": "string",
        "Description": "string",
        "Processor": "string",
        "Price": number,
        "Manufacturer": "string"
    }
}
####################

# Radera en dator
# DELETE - http://localhost:1337/api/computers/:id