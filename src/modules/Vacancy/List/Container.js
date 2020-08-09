import React from 'react'
import { gql, useMutation } from '@apollo/client';


const useContainer = () => {


    const [open, setOpen] = React.useState(false);

    const goToDetail = (id) => (window.location.href = `detail?id=${id}`);


    const addVacancyMutation = gql`
		mutation vacancies($name: String!, $company: String!, $salary: String!, $place: String!, $description: String!  ) {
			vacancies(name: $name, company: $company, salary: $salary, place : $place, description: $description  ) {
				id
				name
			}
		}
	`



    const [mutateVacancy,] = useMutation(addVacancyMutation);


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



    const addVacancy = (vacancy) => {



        mutateVacancy({ variables: { ...vacancy } });

        setOpen(false);

    }





    return {
        open,
        setOpen,
        listVacanciesQuery,
        action,
        goToDetail,
        addVacancy
    }

}

export default useContainer;

