import React from 'react';
import imageName from './Slider1.jpg';
import slider2 from './Slider2.jpg';

const BlogPosts = () => {
    const posts = [
      {
        id: 1,
        image: imageName,
        title: 'Meditare in silenzio',
        description: 'La sensazione di pace del momento',
      },
      {
        id: 2,
        image: slider2,
        title: 'Meditare in solitudine',
        description: 'I vantaggi del effetuarlo da soli',
      },
      {
        id: 3,
        image: imageName,
        title: 'Meditare in silenzio',
        description: 'La sensazione di pace del momento',
      },
      {
        id: 4,
        image: slider2,
        title: 'Meditare in solitudine',
        description: 'I vantaggi del effetuarlo da soli',
      },
      // Aggiungi più post se necessario
    ];
  
    return (
      <section className="blog-section">
        {posts.map((post) => (
          <div key={post.id} className="blog-card" id="blog">
            <img src={post.image} alt={`Post ${post.id}`} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };

export default BlogPosts;
