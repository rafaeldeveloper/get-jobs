import React from 'react'
import { Modal, Button, Form } from 'semantic-ui-react';


export default ({ open, setOpen, title, onConfirm }) => {


    let defaultVacancy = {
        name: '',
        company: '',
        salary: '',
        place: '',
        description: ''
    };

    const [vacancy, setVacancy] = React.useState(defaultVacancy)


    const addProperty = (e, property) => {

        vacancy[property] = e.target.value;
        setVacancy({ ...vacancy });

    }




    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>{title}</Modal.Header>
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
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancelar
                </Button>
                <Button
                    content="Salvar"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => onConfirm(vacancy)}
                    positive
                />
            </Modal.Actions>
        </Modal>)
}
