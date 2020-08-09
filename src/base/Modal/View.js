import React from 'react'
import { Modal, Button, Form } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';


export default ({ open, setOpen }) => {


    const addVacancyMutation = gql`
		mutation vacancies($name: String!, $company: String!, $salary: String!, $place: String!, $description: String!  ) {
			vacancies(name: $name, company: $company, salary: $salary, place : $place, description: $description  ) {
				id
				name
			}
		}
	`



    const [mutateVacancy,] = useMutation(addVacancyMutation);


    let vacancy = {
        name: '',
        company: '',
        salary: '',
        place: '',
        description: ''
    };

    const addVacancy = () => {



        mutateVacancy({ variables: { ...vacancy } });

        setOpen(false);

    }




    const addProperty = (e, property) => {

        vacancy[property] = e.target.value;

    }






    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>Adicionar Vaga</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Nome da Vaga</label>
                        <input
                            placeholder='React developer'
                            onChange={(e) => addProperty(e, 'name')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Empresa</label>
                        <input
                            placeholder='Nkey'
                            onChange={(e) => addProperty(e, 'company')}

                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Salario</label>
                        <input
                            placeholder='3.0000'
                            onChange={(e) => addProperty(e, 'salary')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Local</label>
                        <input
                            placeholder='Remoto'
                            onChange={(e) => addProperty(e, 'place')}
                        />
                    </Form.Field>
                    <Form.TextArea label='Descrição da vaga' placeholder='Desensolvedor react em Fortaleza' onChange={(e) => addProperty(e, 'description')} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancelar
        </Button>
                <Button
                    content="Salvar"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => addVacancy()}
                    positive
                />
            </Modal.Actions>
        </Modal>)
}
