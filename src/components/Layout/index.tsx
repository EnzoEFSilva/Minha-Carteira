import React from "react";

import { Grid } from './style'

import HeaderMain from "../HeaderMain";
import Aside from "../Aside"
import Content from "../Content";

const Layout: React.FC = () => {
    return (
    
        <Grid>
            <HeaderMain/>
            <Aside/>
            <Content/>
        </Grid>
      
    );
}

export default Layout;