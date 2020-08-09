import React from 'react'
import GraphqlDataProvider from 'base/GraphqlDataProvider';
import VacancyList from 'base/Iterator';
import Menu from 'base/Menu';
import Modal from 'base/Modal';
import logo from 'nkey.jpg'
import useContainer from './Container';
import { Grid } from 'semantic-ui-react';
import { VacancyCard } from './Stylesheet';


export default (props) => {

	const { setOpen, open, listVacanciesQuery, action, goToDetail } = useContainer(props);

	return (
		<Grid columns={1} centered divided>
			<Modal open={open} setOpen={setOpen} />
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu logo={logo} action={action} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={12} centered>
					<GraphqlDataProvider query={listVacanciesQuery} adapter={(data) => data?.vacancies}>
						<VacancyList
							item={(data) =>
								<VacancyCard
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
