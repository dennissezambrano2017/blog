import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import Chip from '../../components/common/Chip';
import Referencs from '../../components/common/Referencs';
import Footer from '../../components/Home/Footer';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Volver</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Publicado {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <div>
            <div className='blog-imag' >
              <img src={blog.cover} alt='' /><br />
            </div>
            <div className='blog-desc'>
              <p className='detail'>{blog.description}</p>
              <div className='blog-imag' >
                <img src={blog.imgs1} alt='' /><br />
              </div>
              <p className='detail'>{blog.description2}</p>
              <div className='blog-imag' >
                <img src={blog.imgs2} alt='' /><br />
              </div>
              <p className='detail'>{blog.description3}</p>
              <div className='blog-imag' >
                <img src={blog.imgs3} alt='' /><br />
              </div>
            </div>
          </div>
          <div className='blog-refer'>
            <h2> Referencias:</h2> 
              {blog.refer.map((refer, i) => (
                <div key={i}>
                  <Referencs label={refer} /><br />
                </div>
              ))}
            </div>

          {/*Pie de página*/}
          <Footer />



        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;