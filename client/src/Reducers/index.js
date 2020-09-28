import { combineReducers } from 'redux';
import categoryReducer from './category';
import categoriesReducer from './categories';
import tileTypeReducer from './tileType';
import infoReducer from './info';
import projectReducer from './project';
import subcategoryReducer from './subcategory';
import tilesReducer from './tiles';
import toolReducer from './tool';


const rootReducer = combineReducers({
    category: categoryReducer,
    categories: categoriesReducer,
    info: infoReducer,
    project: projectReducer,
    subcategory: subcategoryReducer,
    tiles: tilesReducer,
    tileType: tileTypeReducer,
    tool: toolReducer
});

export default rootReducer;

