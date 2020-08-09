import React from 'react'
import { Card, Grid, Menu, Icon, Modal, Button, Form, Image, Confirm } from 'semantic-ui-react';
import logo from 'nkey.jpg'
import GraphqlDataProvider from 'base/GraphqlDataProvider';
import { useQueryParams } from 'hookrouter';
import VacancyList from 'base/Iterator';
import { gql, useMutation } from '@apollo/client';
import cogoToast from 'cogo-toast';

export default () => {


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


	const [mutateDeleteVacancy,] = useMutation(deleteVacancyMutation);
	const [mutateUpdateVacancy,] = useMutation(updateVacancyMutation);


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

	const addProperty = (e, property) => {

		vacancy[property] = e.target.value;
		setVacancy({ ...vacancy });

	}

	return (<Grid columns={1} centered divided>


		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
		>
			<Modal.Header>Editar Vaga</Modal.Header>
			<Modal.Content>
				<Modal.Content>
					<Form>
						<Form.Field>
							<label>Nome da Vaga</label>
							<input
								placeholder='React developer'
								value={vacancy?.name}
								onChange={(e) => addProperty(e, 'name')}
							/>
						</Form.Field>
						<Form.Field>
							<label>Empresa</label>
							<input
								value={vacancy?.company}
								placeholder='Nkey'
								onChange={(e) => addProperty(e, 'company')}

							/>
						</Form.Field>
						<Form.Field>
							<label>Salario</label>
							<input
								value={vacancy?.salary}
								placeholder='3.0000'
								onChange={(e) => addProperty(e, 'salary')}
							/>
						</Form.Field>
						<Form.Field>
							<label>Local</label>
							<input
								value={vacancy?.place}
								placeholder='Remoto'
								onChange={(e) => addProperty(e, 'place')}
							/>
						</Form.Field>
						<Form.TextArea value={vacancy?.description} label='Descrição da vaga' placeholder='Desensolvedor react em Fortaleza' onChange={(e) => addProperty(e, 'description')} />
					</Form>
				</Modal.Content>
			</Modal.Content>
			<Modal.Actions>
				<Button color='black' onClick={() => setOpen(false)}>
					Cancelar
        </Button>
				<Button
					content="Salvar"
					labelPosition='right'
					icon='checkmark'
					onClick={() => updateVacancy()}
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
						onClick={() => window.location.replace("list")}
						name='vacancies'
					>
						Vacancies
	        </Menu.Item>

				</Menu>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column width={8} centered>
				<GraphqlDataProvider query={listVacancy} adapter={(data) => [data?.vacancy]} variables={{ id: parseInt(id) }}>
					<VacancyList
						itemsPerRow={1}
						item={(data) =>
							<Card>
								{
									data && <Button.Group>
										<Button icon onClick={() => setVacancyToEdit(data)}>
											<Icon name='pencil' />
										</Button>
										<Button icon onClick={() => setVacancyToDelete(data)}>
											<Icon name='x' />
										</Button>
									</Button.Group>
								}

								<Confirm
									open={deleteOpen}
									onCancel={() => setDeleteOpen(false)}
									onConfirm={() => deleteVacancy(data)}
								/>

								<Image src={logo} wrapped ui={false} style={{ width: "25%" }} />
								<Card.Content>
									<Card.Header>{data?.name}</Card.Header>
									<Card.Meta>
										{data?.company}
									</Card.Meta>
									<Card.Description>
										{data?.description}
									</Card.Description>
									<span>
										Local : {data?.place || "Não Informado"}
									</span><br />
									<span>
										Salario: {data?.salary || "Não Informado"}
									</span>
								</Card.Content>
							</Card>

						}
					/>
				</GraphqlDataProvider>
			</Grid.Column>
		</Grid.Row>
	</Grid >


	)
}

