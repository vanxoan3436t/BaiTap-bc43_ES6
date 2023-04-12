import { Customer, Employee, Student } from "./PersonUser.js";

export class ListPerson {
    listPerson = [];

    addPerson(arr) {
        this.listPerson.push(arr);
    }

    renderTable(selectorTbody) {
        let htmlContent = '';
        for (let index in this.listPerson) {
            let value = this.listPerson[index];
            if (value.userType === 'Học Viên') {// value = Student
                let student = new Student();
                Object.assign(student, value);
                htmlContent += `
                    <tr>
                    <td>${student.code}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.address}</td>
                   <td>${student.calculatorAverage()}</td>
                    <td>Student 0 lương</td>
                    <td>${student.userType}</td>
                    <td> 
                        <button class="btn btn-danger" onclick="deleteOb('${student.code}')">X</button>
                        <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${student.code}'),showHide() "><i class="fa fa-edit"></i></button>
                    </td>
                  </tr >

             `

            } else if (value.userType === 'Nhân Viên') {// value =  EmpLoyee
                let employee = new Employee();
                Object.assign(employee, value);
                htmlContent += `
                    <tr>
                    <td>${employee.code}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.address}</td>
                    <td>Employee 0 điểm</td>
                    <td>${employee.calulatorMoney()}</td>
                    <td>${employee.userType}</td>
                    <td> 

                    <button class="btn btn-danger" onclick="deleteOb('${employee.code}')">X</button>
                    <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${employee.code}'), showHide()"><i class="fa fa-edit"></i></button>
                </td>
                  </tr >

                    `
            } else {
                value.userType === 'Khách Hàng';// value = Customer
                htmlContent += `
                    <tr>
                    <td>${value.code}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.address}</td>
                    <td>Customer</td>
                    <td>Customer 0 lương</td>
                    <td>${value.userType}</td>
                    <td style="width:10%;"> 
                    <button class="btn btn-danger" onclick="deleteOb('${value.code}')">X</button>
                    <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${value.code}'),showHide()"><i class="fa fa-edit"></i></button>
                </td>
                  </tr >

                    `
            }
        }

        document.querySelector(selectorTbody).innerHTML = htmlContent;
        return htmlContent;
    }

    // renderStudent(selectorTbody) {
    //     let htmlContent = '';
    //     for (let index in this.listPerson) {
    //         let value = this.listPerson[index];
    //         if (value.userType === 'Học Viên') {// value = Student
    //             let student = new Student();
    //             Object.assign(student, value);
    //             htmlContent += `
    //             <tr>
    //             <td>${student.code}</td>
    //             <td>${student.name}</td>
    //             <td>${student.email}</td>
    //             <td>${student.address}</td>
    //            <td>${student.calculatorAverage()}</td>
    //             <td>Student 0 lương</td>
    //             <td>${student.userType}</td>
    //             <td> 
    //                 <button class="btn btn-danger" onclick="deleteOb('${student.code}')">X</button>
    //                 <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${student.code}'),showHide() "><i class="fa fa-edit"></i></button>
    //             </td>
    //           </tr >

    //      `
    //         }
    //         document.querySelector(selectorTbody).innerHTML = htmlContent;

    //     }

    // }

    // renderEmployee(selectorTbody) {
    //     let htmlContent = '';
    //     for (let index in this.listPerson) {
    //         let value = this.listPerson[index];
    //         if (value.userType === 'Nhân Viên') {// value = Student
    //             let employee = new Employee();
    //             Object.assign(employee, value);
    //             htmlContent += `
    //             <tr>
    //             <td>${employee.code}</td>
    //             <td>${employee.name}</td>
    //             <td>${employee.email}</td>
    //             <td>${employee.address}</td>
    //            <td>${employee.calulatorMoney()}</td>
    //            <td>Employee 0 điểm</td>
    //             <td>${employee.userType}</td>
    //             <td> 
    //                 <button class="btn btn-danger" onclick="deleteOb('${employee.code}')">X</button>
    //                 <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${employee.code}'),showHide() "><i class="fa fa-edit"></i></button>
    //             </td>
    //           </tr >

    //      `
    //         }
    //         document.querySelector(selectorTbody).innerHTML = htmlContent;

    //     }

    // }

    // renderCustomer(selectorTbody) {
    //     let htmlContent = '';
    //     for (let index in this.listPerson) {
    //         let customer = this.listPerson[index];
    //         if (customer.userType === 'Khách Hàng') {// value = Student


    //             htmlContent += `
    //             <tr>
    //             <td>${customer.code}</td>
    //             <td>${customer.name}</td>
    //             <td>${customer.email}</td>
    //             <td>${customer.address}</td>
    //             <td>Customer</td>
    //             <td>Student 0 lương</td>
    //             <td>${customer.userType}</td>
    //             <td> 
    //                 <button class="btn btn-danger" onclick="deleteOb('${customer.code}')">X</button>
    //                 <button class="btn btn-success " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editOb('${customer.code}'),showHide() "><i class="fa fa-edit"></i></button>
    //             </td>
    //           </tr >

    //      `
    //         }
    //         document.querySelector(selectorTbody).innerHTML = htmlContent;

    //     }

    // }

    saveLocalStrage() {//viết hàm lưu trữ dữ liệu vào localstorage :chỉ với ofject
        let stringArr = JSON.stringify(this.listPerson);
        //B2 :lưu vào localstorage
        localStorage.setItem('listPerson', stringArr);//localStorage.setItem : là phương thức đc hỗ trợ để lưu của trình duyệt
    }

    fromLocalStrage() {
        if (localStorage.getItem('listPerson')) {
            let stringArr = localStorage.getItem('listPerson');
            this.listPerson = JSON.parse(stringArr);
        }
    }

    deleteObject(code) {
        for (let i in this.listPerson) {
            if (this.listPerson[i].code === code)
                this.listPerson.splice(i, 1);
        }
    }

    getOb(code) {//lấy ob
        for (let i of this.listPerson) {
            if (i.code === code) {
                return i;
            }
        }
    }

    updateUser(object) {
        for (let obEdit of this.listPerson) {
            if (obEdit.userType == object.userType) {
                for (let key in obEdit) {
                    obEdit[key] = object[key];
                }
                break;
            }

        }
    }

    searchUser() {
        let i = [];
        for (let ob of this.listPerson) {
            console.log('ob', ob)
            i.push(ob)
        }
        return i;
    }

    sortArr() {
        for (let arr in this.listPerson) {
            console.log('arr', this.listPerson[arr])
            const sortArray = this.listPerson[arr].name;
            console.log(' s', sortArray)
        }

    }



}
// Khách Hàng Nhân Viên Học Viên