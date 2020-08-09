import React from 'react'

export default ({ data }) => (
    <>
        <span>
            Local : {data?.place || "Não Informado"}
        </span><br />
        <span>
            Salario: {data?.salary || "Não Informado"}
        </span>
    </>
)