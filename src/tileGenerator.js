import React from 'react';

class TileGenerator extends React.Component {

    render () {
        return null;
    }

    determineTileInfo = (type,tile) => {
        if(type === 'categories') {
            let subcategories = this.determineSubcategories(tile);
            return {list: subcategories, type: 'subcategories'};
            
          }
          else if(type === 'subcategories') {
            let projects = this.determineProjects(tile);
            return {list: projects, type: 'projects'}
          }
          else if(type === 'projects') {
            let tools = this.determineTools(tile);
            let projectInfo = this.determineProjectInfo(tile); 
            return {list: tools, type: 'tools', info: projectInfo};
          }
          else if(type === 'tools') {
            let toolInfo = this.determineToolInfo(tile);
            return {list: '', type: 'tool', info: toolInfo};
          }

    }
      ///////////////////////////////
     // Determining Subcategories //
    ///////////////////////////////

    subCategoriesFloor() {
        return ['Wood','Carpet','Tile'];
    }

    subCategoriesBath() {
        return  ['Sink','Bathtub','Shower'];
    }

    subCategoriesWall() {
        return ['Drywall','Hanging', 'Painting'];
    }

    subCategoriesOutdoor() {
        return ['Patio','Fire Pit','Exterior'];
    }

    subCategoriesKitchen() {
        return ['Sink','Cabinets','Counter Tops'];
    }

    subCategoriesRoof() {
        return ['Metal Roof', 'Vinyl Roof', 'Clay Tile', 'Concrete Tile'];
    }

    subCategoriesLighting() {
        return ['Indoor Lighting', 'Outdoor Lighting'];
    }
       

    determineSubcategories = (category) => {
        if(category  === 'Floor') 
            return this.subCategoriesFloor();
        else if(category === 'Bath')
            return this.subCategoriesBath();
        else if(category === 'Wall')
            return this.subCategoriesWall();
        else if(category === 'Outdoor')
            return this.subCategoriesOutdoor();
        else if(category === 'Kitchen') 
            return this.subCategoriesKitchen();
        else if(category === 'Roof')
            return this.subCategoriesRoof();
        else
            return this.subCategoriesLighting();
    }

      //////////////////////////
     // Determining Projects //
    //////////////////////////


    // Floor 

    projectsForFloor(subcategory) {
        if(subcategory === 'Wood')
            return this.projectsforFloorWood();
        else 
            return this.projectsForFloorCarpet();
    }

    projectsforFloorWood() {
        return ['Ripping Up Floors','Laying Floors'];
    }

    projectsForFloorCarpet() {
        return ['Ripping Up Carpet','Laying Carpet'];
    }

    // Bath

    projectsForBath(subcategory) {
        if(subcategory === 'Sink')
            return this.projectsForBathSink();
        else if(subcategory === 'Bathtub')
            return this.projectsForBathBathtub();
        else 
            return this.projectsForBathShower();
    }

    projectsForBathSink() {
        return ['Adding Plumbing','Attaching Vanity'];
    }

    projectsForBathBathtub() {
        return ['Adding Drain','Inserting Tub'];
    }

    projectsForBathShower() {
        return ['Tiling Wall','Tiling Floor', 'Adding Drain', 'Attaching Insert'];
    }


    // Wall

    projectsForWall(subcategory) {
        if(subcategory === 'Drywall') {
            return this.projectsForWallDrywall();
        }
        if(subcategory === 'Hanging') {
            return this.projectsForWallHanging();
        }
        else {
            return this.projectsForWallPainting();
        }
    }

    projectsForWallDrywall() {
        return ['Patching','Adding Panel','Insulation'];
    }

    projectsForWallHanging() {
        return ['Hanging Painting','Adding Panel'];
    }
    
    projectsForWallPainting() {
        return ['Painting Wall'];
    }

    // Outdoor

    projectsFortOutdoor(subcategory) {
        if(subcategory === 'Patio') 
            return this.projectsForOutdoorPatio();
        if(subcategory === 'Fire Pit') 
            return this.projectsForOutdoorFirePit();
        else
            return this.projectsForOutdoorExterior();
    }

    projectsForOutdoorPatio() {
        return ['Wood Patio','Paver Patio'];
    }

    projectsForOutdoorFirePit() {
        return ['Inground Pit','Paver Pit'];
    }

    projectsForOutdoorExterior() {
        return ['Siding','Painting','Stucco'];
    }

    // Kitchen 

    projectsForKitchen(subcategory) {
        if(subcategory === 'Sink') 
            return this.projectsForKitchenSink();
        if(subcategory === 'Cabinets')
            return this.projectsForKitchenCabinets();
        else 
            return this.projectsForKitchenCounterTops();
    }

    projectsForKitchenSink() {
        return ['Installing Sink','Fixing Sink Plumbing'];
    }

    projectsForKitchenCabinets() {
        return ['Painting Cabinets','Installing Cabinets', 'Removing Cabinets'];
    }

    projectsForKitchenCounterTops() {
        return ['Granite','Butcher Block','Vinyl'];
    } 

    // Roof 

    projectsForRoof(subcategory) {
        if(subcategory === 'Metal Roof') 
            return this.projectsForRoofMetalRoof();
        if(subcategory === 'Vinyl Roof') 
            return this.projectsForRoofVinylRoof();
        if(subcategory === 'Clay Tile')
            return this.projectsForRoofClayTile();
        else 
            return this.projectsForRoofConcreteTile();
    }

    projectsForRoofMetalRoof() {
        return ['Patching Roof','Replacing Roof'];
    }

    projectsForRoofVinylRoof() {
        return ['Patching Roof','Replacing Roof'];
    }

    projectsForRoofClayTile()  {
        return ['Patching Roof','Replacing Roof'];
    }

    projectsForRoofConcreteTile() {
        return ['Patching Roof','Replacing Roof'];
    }

    // Lighting
    projectsForLighting(subcategory) {
        if(subcategory === 'Indoor Lighting')
            return this.projectsForLightingIndoorLighting();
        else
            return this.projectsForLightingOutdoorLighting();
    }

    projectsForLightingIndoorLighting() {
        return ['Ceiling Fan','Ceiling Light'];
    }

    projectsForLightingOutdoorLighting() {
        return ['Porch Lighting','Flood Light'];
    }

    determineProjects = (subcategory) => {
        if(this.props.category === 'Floor') 
            return this.projectsForFloor(subcategory);
        else if(this.props.category === 'Bath') 
            return this.projectsForBath(subcategory);
        else if(this.props.category === 'Wall') 
            return this.projectsForWall(subcategory);
        else if(this.props.category === 'Outdoor')
            return this.projectsFortOutdoor();
        else if(this.props.category === 'Kitchen') 
            return this.projectsForKitchen(subcategory); 
        else if(this.props.category === 'Roof') 
            return this.projectsForRoof(subcategory);
        else
            return this.projectsForLighting(subcategory);
    }
    
    determineTools = (project) => {
        return ['tool1','tool2','tool3'];
    }

    determineProjectInfo = (tile) => {
        return tile + ': Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.';
    }
      
    determineToolInfo = (tile) => {
        return tile + ': Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus malesuada, varius purus at, posuere justo. Pellentesque sit amet tortor erat. Vivamus pharetra augue a elit elementum, sagittis semper ex cursus. Nunc interdum, ligula sed consectetur mattis, erat libero semper enim, ac auctor tellus tellus vel orci. Vestibulum vel quam nulla. Nunc rutrum, nisi sit amet bibendum sollicitudin, quam neque mattis purus, ut consequat nibh arcu sit amet purus. Praesent quis fringilla sem, at rhoncus lectus. Sed rutrum interdum elit, hendrerit tincidunt nisi pretium vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus cursus sit amet eros eu sagittis.';
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.tile !== this.props.tile && this.props.tile !== '') {
            console.log("data given: " + this.props.type + ", " + this.props.tile)
            let v = this.determineTileInfo(this.props.type,this.props.tile)
            console.log("Function Called:");
            console.log("list: " + v.list);
            console.log("type: " + v.type);
            console.log("info: " + v.info);
    
            this.props.setTileDataFn(v.list,v.type,v.info);
        }
    }


}

export default TileGenerator;