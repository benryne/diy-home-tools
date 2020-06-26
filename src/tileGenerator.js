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
          else if(type === 'subcategories' ) {
            let projects = this.determineProjects(tile);
            return {projects: projects, list: projects, type: 'projects'}
          }
          else if(type === 'projects') {
            let tools = this.determineTools(tile);
            let projectInfo = this.determineProjectInfo(tile); 
            return {tools: tools, list: tools, type: 'tools', info: projectInfo};
          }
          else if(type === 'tools' ) {
            let toolInfo = this.determineToolInfo(tile);
            return {tool: tile, list: '', type: 'tool', info: toolInfo};
          }

    }

    determineSubcategories = (category) => {
        if(category  === 'Floor') {
          return ['Wood','Carpet','Tile'];
        }
        else if(category === 'Bath') {
          return ['Sink','Bathtub','Shower'];
        }
        else if(category === 'Wall') {
          return ['Drywall','Hanging', 'Painting'];
        }
        else if(category === 'Outdoor') {
          return ['Patio','Fire Pit','Exterior'];
        }
        else if(category === 'Kitchen') {
          return ['Sink','Cabinets','Counter Tops'];
        }    
        else if(category === 'Roof') {
          return ['Metal Roof', 'Vinyl Roof', 'Clay Tile', 'Concrete Tile']
        }
        else {
          return ['Indoor Lighting', 'Outdoor Lighting']
        }
      }
    
    determineProjects = (subcategory) => {
        console.log('category: ' + this.props.category + " subcategory: " + subcategory)
        if(this.props.category === 'Floor') {
            if(subcategory === 'Wood') {
                return ['Ripping Up Floors','Laying Floors'];
            }
            else {
                return ['Ripping Up Carpet','Laying Carpet'];
            }
        }
        else if(this.props.category === 'Bath') {
            if(subcategory === 'Sink') {
                return ['Adding Plumbing','Attaching Vanity'];
            }
            else if(subcategory === 'Bathtub') {
                return ['Adding Drain','Inserting Tub'];
            }
            else {
                return ['Tiling Wall','Tiling Floor', 'Adding Drain', 'Attaching Insert'];
            }
        }
        else if(this.props.category === 'Wall') {
            if(subcategory === 'Drywall') {
                return ['Patching','Adding Panel','Insulation'];
            }
            if(subcategory === 'Hanging') {
                return ['Hanging Painting','Adding Panel'];
            }
            else {
                return ['Painting Wall'];
            }
        }
        else if(this.props.category === 'Outdoor') {
            if(subcategory === 'Patio') {
                return ['Wood Patio','Paver Patio'];
            }
            if(subcategory === 'Fire Pit') {
                return ['Inground Pit','Paver Pit'];
            }
            else {
                return ['Siding','Painting','Stucco'];
            }
        }
        else if(this.props.category === 'Kitchen') {
            if(subcategory === 'Sink') {
                return ['Installing Sink','Fixing Sink Plumbing'];
            }
            if(subcategory === 'Cabinets') {
                return ['Painting Cabinets','Installing Cabinets', 'Removing Cabinets'];
            }
            else {
                return ['Granite','Butcher Block','Vinyl'];
            }
        }
        else if(this.props.category === 'Roof') {
            if(subcategory === 'Metal Roof') {
                return ['Patching Roof','Replacing Roof'];
            }
            if(subcategory === 'Vinyl Roof') {
                return ['Patching Roof','Replacing Roof'];
            }
            if(subcategory === 'Clay Tile') {
                return ['Patching Roof','Replacing Roof'];
            }
            else {
                return ['Patching Roof','Replacing Roof'];
            }
        }
        else {
            if(subcategory === 'Indoor Lighting') {
                return ['Ceiling Fan','Ceiling Light'];
            }
            else {
                return ['Porch Lighting','Flood Light'];
            }
        }
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