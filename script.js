var myMovies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F53CWT0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film opowiadający historię króla sawanny.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-E915Q0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 3,
    title: 'Shrek',
    desc: 'Jest to opowieść o dużym zielonym ogrze o imieniu Shrek.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F4S6OE0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 4,
    title: 'Skok przez płot',
    desc: 'Historia o przyjaźni i rodzinie opowiedziana za pomocą postaci zwierząt mieszkających w lesie, który został przekształcony w park miejski.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F3NF9L0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 5,
    title: 'Gwiezdne Wojny',
    desc: 'Seria filmów zainicjowana przez George\'a Lucasa, której akcja rozgrywa się „dawno temu w odległej galaktyce".',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F5RPXZ0.jpg?w=100&h=auto&p=0',
  },
];

var Title = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.createElement('h2', {}, this.props.title);
  },
});

var Desc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.createElement('p', {}, this.props.desc);
  },
});

var Image = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.createElement('img', { src: this.props.imgURL });
  },
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      React.createElement('li', {},
        React.createElement(Title, { title: this.props.movie.title }),
        React.createElement(Desc, { desc: this.props.movie.desc }),
        React.createElement(Image, { imgURL: this.props.movie.poster })
      )
    );
  },
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function () {
    var moviesElements = this.props.movies.map(function (movie) {
      return React.createElement(Movie, { key: movie.id, movie: movie });
    });

    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('u1', {}, moviesElements)
      )
    );
  },

});

var element = React.createElement(MovieList, { movies: myMovies });
ReactDOM.render(element, document.getElementById('app'));
