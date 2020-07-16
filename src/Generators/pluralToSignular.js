function PluralToSingular(type) {
    if(type === 'categories')
        return 'category';
    if(type === 'subcategories')
        return 'subcategory';
    if(type === 'projects')
        return 'project';
    if(type === 'tools')
        return 'tool';
}

export default PluralToSingular;