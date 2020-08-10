import React, { useEffect } from 'react'


const useContainer = ({ resource }) => {


    let defaultVacancy = {
        name: '',
        company: '',
        salary: '',
        place: '',
        description: ''
    };

    const [vacancy, setVacancy] = React.useState(defaultVacancy);



    useEffect(() => {

        if (resource) {
            setVacancy({ ...resource });

        }

    }, [resource]);

    const addProperty = (e, property) => {

        vacancy[property] = e.target.value;
        setVacancy({ ...vacancy });

    }


    return {
        vacancy,
        addProperty,
    }

}

export default useContainer;

