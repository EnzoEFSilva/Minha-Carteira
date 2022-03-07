import React from "react";

import ContentHeader from '../../components/ContentHeader';
import Selectinput from '../../components/Selectinput';

import { Container } from './style';

const List: React.FC = () => {

    const options = [
        { value: 'Enzo', label: 'Enzo'},
        { value: 'Fagner', label: 'Fagner'},
        { value: 'Venildo', label: 'Venildo'},
     ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
        <Selectinput options={options} />
     </ContentHeader> 
        </Container>
    );
}

export default List;