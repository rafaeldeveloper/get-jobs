import React from 'react'
import { gql, useMutation } from '@apollo/client';
import cogoToast from 'cogo-toast';
import { useQueryParams } from 'hookrouter';


const useContainer = () => {

	const [open, setOpen] = React.useState(false);
	const [deleteOpen, setDeleteOpen] = React.useState(false)
	const [queryParams,] = useQueryParams();
	const { id } = queryParams;
	const [vacancy, setVacancy] = React.useState({})


	const deleteVacancyMutation = gql`
		mutation deleteVacancy($id: Int! ) {
			deleteVacancy(id: $id) {
				id
				name
			}
		}

	`


	const updateVacancyMutation = gql`
		mutation updateVacancy($id: Int!, $name: String!, $company: String, $salary: String, $place: String, $description: String  ) {
			updateVacancy(id: $id, name: $name, company: $company, salary: $salary, place : $place, description: $description  ) {
				id
				name
			}
		}

    `
    
    const listVacancy = gql`
    query vacancy($id: Int!) {
        vacancy(id: $id ) {
            id
            name,
            place,
            company,
            salary,
            description
        }
}

`

	const [mutateDeleteVacancy,] = useMutation(deleteVacancyMutation);
	const [mutateUpdateVacancy,] = useMutation(updateVacancyMutation);


	const setVacancyToEdit = (vacancyToEdit) => {
		setVacancy(vacancyToEdit);
		setOpen(true);
	}

	const setVacancyToDelete = () => {
		setDeleteOpen(true);
	}


	const deleteVacancy = (vacancy) => {

		try {

			mutateDeleteVacancy({ variables: { id: vacancy.id } });
			setDeleteOpen(false);
			cogoToast.success(`Vacancy '${vacancy.name}' deleted with success, redirecting to vacancy list...`);

			setTimeout(function () {

				window.location.replace("list");

			}, 3000);



		} catch (error) {
			cogoToast.error('Fail on delete Vacancy!');
			setDeleteOpen(false);

		}


	}

	const updateVacancy = () => {

		mutateUpdateVacancy({ variables: { ...vacancy } });
		cogoToast.success(`Vacancy '#${vacancy.id}' updated with success`);
		setOpen(false);

	}



    return {
        setDeleteOpen,
        listVacancy,
        setOpen,
        id,
        deleteOpen,
        open,
        updateVacancy,
        deleteVacancy,
        setVacancyToDelete,
        setVacancyToEdit
    }

}

export default useContainer;

