import React from 'react';

function Article(props) {
  let base_url = 'https://reddit.com';
  // let is_gallery = props.article.is_gallery

  return (
    // galley

    <article>
      <a href={base_url + props.article.permalink}>
        <h3>{props.article.title}</h3>
        <p>{props.article.created}</p>
        <p>{props.article.is_gallery}</p>
        <img width="300" alt="" src={props.article.url_overridden_by_dest} />
      </a>
    </article>

    // https://www.npmjs.com/package/react-infinite-scroll-component
  );
}

export default Article;
