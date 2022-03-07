import React from "react";

import ContentHeader from "../../components/ContentHeader";
import Selectinput from '../../components/Selectinput'

import { Container } from './style';

const Dashboard: React.FC = () => {

    const options = [
        { value: 'Enzo', label: 'Enzo'},
        { value: 'Fagner', label: 'Fagner'},
        { value: 'Venildo', label: 'Venildo'},
     ]

    return (
       <Container>
           <ContentHeader title="Dashboard" lineColor="#F7931B">
               <Selectinput options={options} />
            </ContentHeader> 

           
       </Container>
    );
}

export default Dashboard;