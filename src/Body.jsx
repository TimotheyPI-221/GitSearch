import * as React from 'react';
import RepoInfo from './RepoInfo';
import RepoTable from './RepoTable';
import Background from './Background'
import Welcome from './Welcome';

export default function Body( { data } ) {
  const [ selectRepo, setSelectRepo ] = React.useState(null)
  function handleSelectRepo(repo) {
    setSelectRepo(repo)
  }

  return (
    <div className="container" style={{minWidth: '100%'}}>
      <div className="row" >
        < RepoTable data={data} selectRepo={ handleSelectRepo } />
       {selectRepo ? < RepoInfo data={selectRepo}/> : <Background />}
      </div>
    </div>
  )
}