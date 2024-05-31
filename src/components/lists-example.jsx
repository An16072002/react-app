

class Employee extends React.Component {
    render() {
      return (
        <li className="employee">
          <div>
            <b>Full Name:</b> {this.props.fullName}
          </div>
          <div>
            <b>Gender:</b> {this.props.gender}
          </div>
        </li>
      );
    }
  }
  
  
  class EmployeeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: [
          { empId: 1, fullName: "Trump", gender: "Male" },
          { empId: 2, fullName: "Ivanka", gender: "Female" },
          { empId: 3, fullName: "Kushner", gender: "Male" }
        ]
      };
    }
  
    render() {
     
      var listItems = this.state.employees.map(e => (
        <Employee fullName={e.fullName} gender={e.gender} />
      ));
      return (
          <ul className="employee-list">
             {listItems}
          </ul>
        );
    }
  }
  const container = document.getElementById("employeelist1");
  const root = ReactDOM.createRoot(container);
  root.render(<EmployeeList />);
