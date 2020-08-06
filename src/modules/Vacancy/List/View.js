import React from 'react'
import { Card, Grid, Menu, Icon, Modal, Button, Form } from 'semantic-ui-react';
import logo  from 'nkey.jpg'

export default ({ title = 'Loading', size }) => {
 

  const [open, setOpen] = React.useState(false)



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
	      <input placeholder='React developer' />
	    </Form.Field>
	    <Form.Field>
	      <label>Empresa</label>
	      <input placeholder='Nkey' />
	    </Form.Field>
	     <Form.Field>
	      <label>Salario</label>
	      <input placeholder='3.0000' />
	    </Form.Field>
	      <Form.Field>
	      <label>Local</label>
	      <input placeholder='Remoto' />
	    </Form.Field>
         <Form.TextArea label='Descrição da vaga' placeholder='Desensolvedor react em Fortaleza' />
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
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>


    <Grid.Row>
        <Grid.Column width={16}>
	     <Menu stackable>
	        <Menu.Item>
	          <img src={logo} alt="logo"/>
	        </Menu.Item>
      		<Menu.Item
	          name='features'
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
			<Card.Group centered  itemsPerRow={4} >
			   <Card
			   		style={{cursor:'pointer'}}
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  >
				  </Card>
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				   <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
				  <Card
				    image={logo}
				    header='Desenvolvedor(a) Front-End React'
				    meta='Nkey'
				    description='Densevolvedor React em Foripa'
				    extra={"Há 23 Horas"}
				  />
			 	</Card.Group>
     		 </Grid.Column>
	    </Grid.Row>
	</Grid>


)}
