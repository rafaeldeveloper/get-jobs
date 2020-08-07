import React from 'react'
import { Card, Grid, Menu, Icon, Modal, Button, Form, Image, Confirm} from 'semantic-ui-react';
import logo  from 'nkey.jpg'

export default ({ title = 'Loading', size }) => {
 

  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false)



const addVacancy = () => {

	console.log("added vacancy");
	setOpen(false);

}


  return (<Grid columns={1} centered divided>
    

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Editar Vaga</Modal.Header>
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
          onClick={() => addVacancy()}
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
	       
	      </Menu>
	    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={8} centered>
			<Card.Group centered  itemsPerRow={1} >
				<Card>
				  <Button.Group>
					<Button icon onClick={()=> setOpen(true)}>
			    		<Icon name='pencil' />
				 	</Button>
					<Button icon onClick={()=> setDeleteOpen(true)}>
			    		<Icon name='x' />
				 	</Button>
				  </Button.Group>
		
				   <Confirm
		          open={deleteOpen}
		          onCancel={() => setDeleteOpen(false)}
		          onConfirm={() => setDeleteOpen(false)}
		        />
		
			    <Image src={logo} wrapped ui={false} style={{width:"25%"}} />
			    <Card.Content>
			      <Card.Header>Desenvolvedor(a) Front-End React</Card.Header>
			      <Card.Meta>
			        Nkey
			      </Card.Meta>
			      <Card.Description>
					Densevolvedor React em Foripa
			      </Card.Description>
			      <span>
					Local: Fotaleza
			      </span><br/>
			      <span>
					Salário: Não informado
			      </span>
			    </Card.Content>
			    <Card.Content extra>
			      <span>
			        Há 23 Horas
			      </span>
			    </Card.Content>
			  </Card>
			  			</Card.Group>
     		 </Grid.Column>
	    </Grid.Row>
	</Grid>


)}

