import React from 'react';

import Directory from '../Components/directory/directory.component';
// import '../Pages/homepage.styles.scss';

import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;