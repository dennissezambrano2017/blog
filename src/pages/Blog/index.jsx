import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import Referencs from '../../components/common/Referencs';
import Details from '../../components/common/two_Details';
import EmptyList from '../../components/common/EmptyList';
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
              <img src={blog.cover} alt='' />
            </div>
            <div className='blog-desc'>
              <p >{blog.description}</p>
              <p >{blog.description}</p>
              <div>
                <Details label={blog.description2} />
              </div>
              <div className='parrai'>
                <img label={blog.img} alt="" />
                <img src="https://loremflickr.com/320/240" alt="" />
                <Details label={blog.description2} />
                <Details label={blog.description2} />
                <Details label={blog.description2} />
              </div>
              <div className='parrad'>
                <img src="https://loremflickr.com/320/240" alt="" />
                <Details label={blog.description2} />
                <Details label={blog.description2} />
                <Details label={blog.description2} />
              </div>
            </div>
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