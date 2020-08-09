import { useQuery } from '@apollo/react-hooks';


const useContainer = ({ variables, adapter, query, ...extraProps }) => {
  

  const { data, loading, error, refetch } = useQuery(query, { variables: variables });

  const adaptedData = adapter ? adapter(data) : data;
  const adaptedProps = { data: adaptedData, refetch, ...extraProps };


  return {
    adaptedProps,
    data,
    loading,
    error
  }

}

export default useContainer;

