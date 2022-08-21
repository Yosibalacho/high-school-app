import { Component } from "react";
import Student from "./Student.component.class";
export const StudentArray = [
  {
    fName: "yosi",
    lastName: "balacho",
    birthdate: new Date("01/04/1997"),
    image: "logo192.png",
  },
  {
    fName: "shimon",
    lastName: "berri",
    birthdate: new Date("23/04/1994"),
    image: "logo192.png",
  },
  {
    fName: "eli",
    lastName: "yano",
    birthdate: new Date("01/12/1999"),
    image: "logo192.png",
  },
  {
    fName: "chen",
    lastName: "simu",
    birthdate: new Date("01/10/1995"),
    image: "logo192.png",
  },
  {
    fName: "nati",
    lastName: "tion",
    birthdate: new Date("01/04/1992"),
    image: "logo192.png",
  },
];
class Students extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        {StudentArray.map((studentItem) => {
          return (
            <Student
              fName={studentItem.fName}
              lastName={studentItem.lastName}
              birthdate={studentItem.birthdate}
              image={studentItem.image}
            />
          );
        })}
      </div>
    );
  }
}
export default Students;
