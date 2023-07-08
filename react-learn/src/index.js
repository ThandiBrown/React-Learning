import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/soloProject.css';
import {CreatingComponents} from './components/lessons/CreatingComponents';
import {ParentComponent} from './components/lessons/ChildParent';
import {ES6Abilities} from './components/lessons/ES6Practice';
import {PropsLesson} from './components/lessons/PropsLesson';
import {Events} from './components/lessons/Events';
import {UseState} from './components/lessons/UseState';

import {MappingProject} from './components/projects/MappingProject';
import {PropsProject} from './components/projects/PropsProject';
import {MapNPropsProject} from './components/projects/MapNPropsProject';
import {StateProject} from './components/projects/StateProject';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <StateProject />
    </>

);
