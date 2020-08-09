import React from 'react'
import { gql } from '@apollo/client';


const useContainer = () => {


    const [open, setOpen] = React.useState(false);

    const goToDetail = (id) => (window.location.href = `detail?id=${id}`);


    const listVacanciesQuery = gql`
        query{
            vacancies {
                id,
                name,
                company,
                salary,
                place,
                description
            }
        }
    `

    const action = {
        icon: 'plus',
        name: 'Adicionar Anuncio',
        execute: setOpen
    }



    return {
        open,
        setOpen,
        listVacanciesQuery,
        action,
        goToDetail
    }

}

export default useContainer;

