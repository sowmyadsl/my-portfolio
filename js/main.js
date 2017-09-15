import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "Example of a react project ",
      'src': "images/ideaboard-react.png",
      'comment': ""
    }
  },
  {
    'title': "Photoshoot rails application",
    'image': {
      'desc': "Example screenshot of application created using rails",
      'src': "images/photoshoot.png",
      'comment': ""
    }
  },
  {
    'title': "work Example",
    'image': {
      'desc': "Restaurant API created using rails",
      'src': "images/api.jpg",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
