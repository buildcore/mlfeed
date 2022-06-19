import React from 'react';

function Article(props) {
  let base_url = 'https://reddit.com';
  const strCopy = props.article.title.split();
  console.log(strCopy);

  // let is_gallery = props.article.is_gallery

  return (
    // galley

    <article>
      <h1 class="text-3xl font-bold underline">{props.article.title[0]}</h1>
      <a href={base_url + props.article.permalink}>
        <h3>{props.article.title}</h3>
        <p className="created">{props.article.created}</p>
        <p>{props.article.is_gallery}</p>
        <img width="300" alt="" src={props.article.url_overridden_by_dest} />
      </a>
    </article>

    // https://www.npmjs.com/package/react-infinite-scroll-component
  );
}

export default Article;
