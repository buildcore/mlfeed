import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// infinite scroll: https://codepen.io/theguyinthechair/pen/ezxVqw
// knowledge graph: https://codepen.io/drastorguev/details/EEadaB

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('pics');
  useEffect(() => {
    fetch('https://www.reddit.com/r/' + subreddit + '.json').then((res) => {
      if (res.status !== 200) {
        console.warn('Warning: Something is wrong with the api.');
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          var temp = data.data.children;
          var articles = [];
          for (var i = 0; i < temp.length; i++) {
            if (temp[i].data.thumbnail_height && !temp[i].data.is_gallery) {
              articles.push(temp[i]);
            }
          }
          setArticles(articles);
        }
      });
    });
  }, [subreddit]);

  return (
    <div className="App">
      <header>
        <input
          class="subreddit_input"
          onChange={(e) => setSubreddit(e.target.value)}
          value={subreddit}
        />
      </header>
      <nav></nav>
      <p classname="">The community app to test general ML</p>
      <p className="ad text-3xl font-bold underline">Sponsor us</p>
      <div className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} />
            ))
          : ''}
      </div>
    </div>
  );
}

export default App;
