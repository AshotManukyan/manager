import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router titleStyle={styles.titleStyle}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create an employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  }
};

export default RouterComponent;
