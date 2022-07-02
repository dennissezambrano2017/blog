import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  //Buscar Submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults();
  }

  //Buscar por blog y categoría
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
      {/*Encabezado de la página*/}
      <Header />

      {/*Barra de búsqueda*/}
      <SearchBar value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/*Lista del blog & lista vacía*/}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      {/*Pie de página*/}
      <Footer />
    </div>
  )
  }
export default Home;
