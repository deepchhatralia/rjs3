import React from 'react';
import { Box } from '@mui/system';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import CategoryCards from './CategoryCards';

const CategoryScroll = ({ category, selectedCategory, handleCategoryClick }) => {
    return (
        <ScrollMenu>
            {category.map(item => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <CategoryCards category={item} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default CategoryScroll