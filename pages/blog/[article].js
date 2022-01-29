import React from 'react';

export default function article(props) {
  console.log(props.article);
  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center mb-4">
        {props.article.title}
      </h1>
      <p className="mb-4">{props.article.body}</p>
    </div>
    )
}


export async function getStaticProps(context) {
  const id = context.params.article;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const article = await data.json()


  return {
    props: {
      article
    }
  }
}


export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  const paths = articles.map (article => ({
    params: {article: article.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}
