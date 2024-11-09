import React from 'react'
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  return (
    <div>Blog</div>
  )
}
// How to remove proptype error warning
// npm install --save prop-types
Blog.PropTypes={
    blog: PropTypes.object.isRequired
}
export default Blog