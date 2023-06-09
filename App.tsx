
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import InitialComponent from './components/InitialComponent';
import ReadCodeComponent from './components/ReadCodeComponent';
import style from './styles/initialPage/StyleInitialPage';

export default () => {

  const [page, setPage] = useState('INITIAL_PAGE')
  const [data, setData] = useState({})

  return <>
              {
                'INITIAL_PAGE' === page ? <InitialComponent page={setPage} data={data}/> : <ReadCodeComponent setData={setData} page={setPage}/>
              }          
        </>

}
