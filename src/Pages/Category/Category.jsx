import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}=useParams()
    const categoryNews=useLoaderData()
    return (
        <div>
          {id && <p>This category News: {categoryNews.length}</p>}
            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;