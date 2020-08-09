import React from 'react'
import logo from 'nkey.jpg'
import GraphqlDataProvider from 'base/GraphqlDataProvider';
import VacancyList from 'base/Iterator';
import Modal from 'base/Modal';
import Menu from 'base/Menu';
import FloatedActions from 'base/FloatedActions';
import ExtraInfo from 'base/ExtraInfo';
import useContainer from './Container';
import { Card, Grid, Confirm } from 'semantic-ui-react';
import { ImageFloated } from './Stylesheet';


export default (props) => {

	const {
		setDeleteOpen,
		id,
		listVacancy,
		deleteOpen,
		open,
		setOpen,
		updateVacancy,
		deleteVacancy,
		actions,

	} = useContainer(props);


	return (
		<Grid columns={1} centered divided>
			<Modal open={open} setOpen={setOpen} title={"Editar Vaga"} onConfirm={updateVacancy} />
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu logo={logo} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={8} centered>
					<GraphqlDataProvider query={listVacancy} adapter={(data) => [data?.vacancy]} variables={{ id: parseInt(id) }}>
						<VacancyList
							itemsPerRow={1}
							item={(data) =>
								<Card>
									<Confirm
										open={deleteOpen}
										onCancel={() => setDeleteOpen(false)}
										onConfirm={() => deleteVacancy(data)}
									/>
									<FloatedActions data={data} actions={actions} />
									<ImageFloated src={logo} wrapped ui={false} style={{ width: "25%" }} />
									<Card.Content>
										<Card.Header>{data?.name}</Card.Header>
										<Card.Meta>
											{data?.company}
										</Card.Meta>
										<Card.Description>
											{data?.description}
										</Card.Description>
										<ExtraInfo data={data} />
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

