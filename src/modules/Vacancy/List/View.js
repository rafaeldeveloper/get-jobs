import React from 'react'
import { navigate } from 'hookrouter';
import { Card as VacancyCard, Grid, Menu, Icon, Modal, Button, Form } from 'semantic-ui-react';
import GraphqlDataProvider from 'base/GraphqlDataProvider';
import VacancyList from 'base/Iterator';
import logo from 'nkey.jpg'
import { gql, useMutation } from '@apollo/client';


export default () => {

	const addVacancyMutation = gql`
		mutation vacancies($name: String!, $company: String!, $salary: String!, $place: String!, $description: String!  ) {
			vacancies(name: $name, company: $company, salary: $salary, place : $place, description: $description  ) {
				id
				name
			}
		}
	`



	const [mutateVacancy, ] = useMutation(addVacancyMutation);
	const [open, setOpen] = React.useState(false)
	let vacancy = {
		name: '',
		company: '',
		salary: '',
		place: '',
		description: ''
	};



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

	const addVacancy = () => {



		mutateVacancy({ variables: { ...vacancy } });

		setOpen(false);

	}

	const goToDetail = (id) => {

		navigate('detail', false, { id: id });
		window.location.href = `detail?id=${id}`
	}


	const addProperty = (e, property) => {

		vacancy[property] = e.target.value;

	}


	return (<Grid columns={1} centered divided>


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
		</Modal>


		<Grid.Row>
			<Grid.Column width={16}>
				<Menu stackable>
					<Menu.Item>
						<img src={logo} alt="logo" />
					</Menu.Item>
					<Menu.Item
						onClick={() => navigate('/')}
						name='vacancies'
					>
						Vacancies
	        </Menu.Item>

					<Menu.Item
						position='right'
						name='add'
						onClick={() => setOpen(true)}
					>
						<Icon name='plus' />
						Adicionar Anuncio
	        </Menu.Item>
				</Menu>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column width={8} centered>
				<GraphqlDataProvider query={listVacanciesQuery} adapter={(data) => data?.vacancies}>
					<VacancyList
						itemsPerRow={4}
						item={(data) =>
							<VacancyCard
								style={{ cursor: 'pointer' }}
								image={logo}
								header={data.name}
								meta={data.company}
								onClick={() => goToDetail(data.id)}
								description={data.description}
							/>
						}
					/>
				</GraphqlDataProvider>
			</Grid.Column>
		</Grid.Row>
	</Grid>


	)
}
