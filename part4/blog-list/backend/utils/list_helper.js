const dummy = (blogs) => {
  // ...
  return 1;
};

const totalLikes = (blogs) => {
  let soma = 0;
  for (let i = 0; i < blogs.length; i++) {
    soma += blogs[i].likes;
  }

  return soma;
};

const favoriteBlog = (blogs) => {
  let best = blogs[0];
  for (let i = 0; i < blogs.length; i++) {
    if (best.likes < blogs[i].likes) {
      best = blogs[i];
    }
  }
  const result = {
    title: best.title,
    author: best.author,
    likes: best.likes,
  };
  return result;
};

const mostBlogs = (blogs) => {
  const count = {};
  let authorRepeated = blogs[0].author;
  let maxRepetitions = 0;

  for (const blog of blogs) {
    count[blog.author] = (count[blog.author] || 0) + 1;

    if (count[blog.author] > maxRepetitions) {
      maxRepetitions = count[blog.author];
      authorRepeated = blog.author;
    }
  }

  return {
    author: authorRepeated,
    blogs: maxRepetitions,
  };
};

const mostLikes = (blogs) => {
  const count = {};
  let authorRepeated = blogs[0].author;
  let maxLikes = 0;

  for (const blog of blogs) {
    count[blog.author] = (count[blog.author] || 0) + blog.likes;

    if (count[blog.author] > maxLikes) {
      maxLikes = count[blog.author];
      authorRepeated = blog.author;
    }
  }

  return {
    author: authorRepeated,
    likes: maxLikes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
