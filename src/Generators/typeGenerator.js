function TypeGenerator(type) {
    if(type === 'categories')
        return 'subcategories';
    if(type === 'subcategories')
        return 'projects';
    if(type === 'projects')
        return 'tools';
    if(type === 'tools')
        return 'tool';
}

export default TypeGenerator;