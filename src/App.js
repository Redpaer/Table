import React from 'react';
import { Table,Button,Spin,Modal} from "antd";
import "antd/dist/antd.css";
import './App.css';
import { useCacheErrors } from 'antd/lib/form/util';

class App extends React.Component{
  state={
    mas:[]
  }
  async componentDidMount(){
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(Result => Result.json())
    .then(data =>{this.setState({
      mas: data
     })
   })
  }
  
  render(){
    console.log(this.state.mas[0]);
    return(
      <Table columns={columns} dataSource={this.state.mas}/>
    );
  }
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: '2',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: '3'  ,
  },
];
export default App;
