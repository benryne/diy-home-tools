function TileGenerator(type,tile,category,subcategory,project) {
    
      ///////////////////////////////
     // Determining Subcategories //
    ///////////////////////////////

    const subCategoriesFloor = () => {
        return ['Wood','Carpet','Tile'];
    }

    const subCategoriesBath = () => {
        return  ['Sink','Bathtub','Shower'];
    }

    const subCategoriesWall = () => {
        return ['Drywall','Hanging', 'Painting'];
    }

    const subCategoriesOutdoor = () => {
        return ['Patio','Fire Pit','Exterior'];
    }

    const subCategoriesKitchen= () => {
        return ['Sink','Cabinets','Counter Tops'];
    }

    const subCategoriesRoof = () => {
        return ['Metal Roof', 'Vinyl Roof', 'Clay Tile', 'Concrete Tile'];
    }

    const subCategoriesLighting = () => {
        return ['Indoor Lighting', 'Outdoor Lighting'];
    }
       

    const determineSubcategories = (category) => {
        if(category  === 'Floor') 
            return subCategoriesFloor();
        else if(category === 'Bath')
            return subCategoriesBath();
        else if(category === 'Wall')
            return subCategoriesWall();
        else if(category === 'Outdoor')
            return subCategoriesOutdoor();
        else if(category === 'Kitchen') 
            return subCategoriesKitchen();
        else if(category === 'Roof')
            return subCategoriesRoof();
        else
            return subCategoriesLighting();
    }

      //////////////////////////
     // Determining Projects //
    //////////////////////////


    // Floor 

    const projectsForFloor = (subcategory) => {
        if(subcategory === 'Wood')
            return projectsforFloorWood();
        else 
            return projectsForFloorCarpet();
    }

    const projectsforFloorWood = () => {
        return ['Ripping Up Floors','Laying Floors'];
    }

    const projectsForFloorCarpet = () => {
        return ['Ripping Up Carpet','Laying Carpet'];
    }

    // Bath

    const projectsForBath = (subcategory) => {
        if(subcategory === 'Sink')
            return projectsForBathSink();
        else if(subcategory === 'Bathtub')
            return projectsForBathBathtub();
        else 
            return projectsForBathShower();
    }

    const projectsForBathSink = () => {
        return ['Adding Plumbing','Attaching Vanity'];
    }

    const projectsForBathBathtub = () => {
        return ['Adding Drain','Inserting Tub'];
    }

    const projectsForBathShower = () => {
        return ['Tiling Wall','Tiling Floor', 'Adding Drain', 'Attaching Insert'];
    }


    // Wall

    const projectsForWall = (subcategory) => {
        if(subcategory === 'Drywall') {
            return projectsForWallDrywall();
        }
        if(subcategory === 'Hanging') {
            return projectsForWallHanging();
        }
        else {
            return projectsForWallPainting();
        }
    }

    const projectsForWallDrywall = () => {
        return ['Patching','Adding Panel','Insulation'];
    }

    const projectsForWallHanging = () => {
        return ['Hanging Painting','Adding Panel'];
    }
    
    const projectsForWallPainting = () => {
        return ['Painting Wall'];
    }

    // Outdoor

    const projectsFortOutdoor = (subcategory) => {
        if(subcategory === 'Patio') 
            return projectsForOutdoorPatio();
        if(subcategory === 'Fire Pit') 
            return projectsForOutdoorFirePit();
        else
            return projectsForOutdoorExterior();
    }

    const projectsForOutdoorPatio = () => {
        return ['Wood Patio','Paver Patio'];
    }

    const projectsForOutdoorFirePit = () => {
        return ['Inground Pit','Paver Pit'];
    }

    const projectsForOutdoorExterior = () => {
        return ['Siding','Painting','Stucco'];
    }

    // Kitchen 

    const projectsForKitchen = (subcategory) => {
        if(subcategory === 'Sink') 
            return projectsForKitchenSink();
        if(subcategory === 'Cabinets')
            return projectsForKitchenCabinets();
        else 
            return projectsForKitchenCounterTops();
    }

    const projectsForKitchenSink = () => {
        return ['Installing Sink','Fixing Sink Plumbing'];
    }

    const projectsForKitchenCabinets = () => {
        return ['Painting Cabinets','Installing Cabinets', 'Removing Cabinets'];
    }

    const projectsForKitchenCounterTops = () => {
        return ['Granite','Butcher Block','Vinyl'];
    } 

    // Roof 

    const projectsForRoof = (subcategory) => {
        if(subcategory === 'Metal Roof') 
            return projectsForRoofMetalRoof();
        if(subcategory === 'Vinyl Roof') 
            return projectsForRoofVinylRoof();
        if(subcategory === 'Clay Tile')
            return projectsForRoofClayTile();
        else 
            return projectsForRoofConcreteTile();
    }

    const projectsForRoofMetalRoof = () => {
        return ['Patching Roof','Replacing Roof'];
    }

    const projectsForRoofVinylRoof = () => {
        return ['Patching Roof','Replacing Roof'];
    }

    const projectsForRoofClayTile = () =>  {
        return ['Patching Roof','Replacing Roof'];
    }

    const projectsForRoofConcreteTile = () => {
        return ['Patching Roof','Replacing Roof'];
    }

    // Lighting
    const projectsForLighting = (subcategory) => {
        if(subcategory === 'Indoor Lighting')
            return projectsForLightingIndoorLighting();
        else
            return projectsForLightingOutdoorLighting();
    }

    const projectsForLightingIndoorLighting = () => {
        return ['Ceiling Fan','Ceiling Light'];
    }

    const projectsForLightingOutdoorLighting = () => {
        return ['Porch Lighting','Flood Light'];
    }

    const determineProjects = (subcategory) => {
        if(category === 'Floor') 
            return projectsForFloor(subcategory);
        else if(category === 'Bath') 
            return projectsForBath(subcategory);
        else if(category === 'Wall') 
            return projectsForWall(subcategory);
        else if(category === 'Outdoor')
            return projectsFortOutdoor();
        else if(category === 'Kitchen') 
            return projectsForKitchen(subcategory); 
        else if(category === 'Roof') 
            return projectsForRoof(subcategory);
        else
            return projectsForLighting(subcategory);
    }
    
    const determineTools = (project) => {
        return ['tool1','tool2','tool3'];
    }

    if(type === 'categories') {
        return determineSubcategories(tile);
    }
    else if(type === 'subcategories') {
        return determineProjects(tile);
    }
    else if(type === 'projects') {
        return determineTools(tile);

    }
    else {
        return '';
    }

}

export default TileGenerator;