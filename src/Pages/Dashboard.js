import React from 'react';
import ImageContainer from '../Containers/ImageContainer/ImageContainer';
import SearchBar from '../Components/SearchBar';
function Dashboard(props) {
  const [listView, toggleView] = React.useState(false);

  function handleChange(udpatedValue) {
    toggleView(udpatedValue)
  }

  return (
    <div>
      <SearchBar history={props.history} listView={listView} onChange={handleChange}/>
      <ImageContainer listView={listView}/>
    </div>
  )
}

export default Dashboard;

