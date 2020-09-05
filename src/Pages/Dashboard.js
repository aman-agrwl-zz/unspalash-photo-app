import React from 'react';
import ImageContainer from '../Containers/ImageContainer/ImageContainer';
import SearchBar from '../Components/SearchBar';
function Dashboard(props) {
  const [listView, toggleView] = React.useState(false);
  const [query, updateQuery] = React.useState("");


  function handleChange(udpatedValue) {
    toggleView(udpatedValue)
  }

  function queryChange(newQueryValue) {
    updateQuery(newQueryValue)
  }

  return (
    <div>
      <SearchBar history={props.history} listView={listView} onChange={handleChange} queryChange={queryChange}/>
      <ImageContainer listView={listView} query={query}/>
    </div>
  )
}

export default Dashboard;

