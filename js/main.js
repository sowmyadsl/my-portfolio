import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Ideaboard Reactjs",
    'href': "https://github.com/sowmyadsl/Ideaboard-React",
    'desc': "An Ideaboard app that uses Rails API backend and front end was developed using react",
    'image': {
      'desc': "Example of a react project ",
      'src': "images/ideaboard-react.png",
      'comment': ""
    }
  },
  {
    'title': "Local Business Rails App",
    'href': "https://github.com/sowmyadsl/photoshoot-rails",
    'desc': "A Ruby on rails web application built for a local photographer(admin) for displaying services and portfolio. User authentication was added using device for admin and customers to login and add comments. A contact form that lets user/customers to contact the photographer using action mailer.",
    'image': {
      'desc': "Example screenshot of application created using rails",
      'src': "images/photoshoot.png",
      'comment': ""
    }
  },
  {
    'title': "Query Emberjs App",
    'href': "http://greedy-clouds.surge.sh/",
    'desc': "An ember web application built to have a message board that allows junior developers and newbies learning to code to ask questions that senior developers, product owners can answer and help them out. Firebase was used for database and CSS for styling",
    'image': {
      'desc': "Query application using emberjs",
      'src': "images/api.jpg",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
