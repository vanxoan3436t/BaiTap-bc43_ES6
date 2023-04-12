
import { Student, Employee, Customer } from "../models/PersonUser.js";
import { ListPerson } from "../models/ListPerson.js";
import { Validations } from "../util/Validation.js";

let listPerson = new ListPerson();
let check = new Validations();
listPerson.fromLocalStrage();
// listPerson.sortArr();
listPerson.renderTable('#tableDanhSach');

document.querySelector('#addUser').onclick = function () {//thêm người dùng

    let loaiND = document.getElementById('userType').value;
    let valid = true;
    if (loaiND === 'Học Viên') {
        let userStudent = new Student();
        let arrStudent = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classStudent .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrStudent) {
            let { id, value } = input;
            userStudent[id] = value;

            valid = check.checkAcc(userStudent.code, 'formatIDUser');
            valid = valid & check.checkName(userStudent.name, 'formatName', 'Họ tên') & check.checkEmpty(userStudent.name, 'notName');
            valid = valid & check.checkEmail(userStudent.email, 'formatEmail');
            valid = valid & check.checkAddress(userStudent.address, 'formatAddress');
            valid = valid & check.checkPassword(userStudent.password, 'formatPassword');
            valid = valid & check.checkNum(userStudent.math, 'formatMath') & check.checkNum(userStudent.physics, 'formatPhy') & check.checkNum(userStudent.chemistry, 'formatChem');

        }
        if (!valid) {
            return;
        }
        listPerson.addPerson(userStudent);//push vô listPerson


    } else if (loaiND === 'Nhân Viên') {
        let userEmpLoyee = new Employee();
        let arrEmpLoyee = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classEmployee .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrEmpLoyee) {
            let { id, value } = input;
            userEmpLoyee[id] = value;

            valid = check.checkAcc(userEmpLoyee.code, 'formatIDUser');
            valid = valid & check.checkName(userEmpLoyee.name, 'formatName', 'Họ tên') & check.checkEmpty(userEmpLoyee.name, 'notName');
            valid = valid & check.checkEmail(userEmpLoyee.email, 'formatEmail');
            valid = valid & check.checkAddress(userEmpLoyee.address, 'formatAddress');
            valid = valid & check.checkPassword(userEmpLoyee.password, 'formatPassword');
            valid = valid & check.checkDayWord(userEmpLoyee.workday, 'formatWorkday');
            valid = valid & check.checkMoney(userEmpLoyee.daymoney, 'formatDayMoney')
        }
        if (!valid) {
            return;
        }
        listPerson.addPerson(userEmpLoyee);//push vô listPerson

    } else {
        loaiND === 'Khách Hàng';
        let userCustomer = new Customer();
        let arrCustomer = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classCustomer .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrCustomer) {
            let { id, value } = input;
            userCustomer[id] = value;

            valid = check.checkAcc(userCustomer.code, 'formatIDUser');
            valid = valid & check.checkName(userCustomer.name, 'formatName', 'Họ tên') & check.checkEmpty(userCustomer.name, 'notName');
            valid = valid & check.checkEmail(userCustomer.email, 'formatEmail');
            valid = valid & check.checkAddress(userCustomer.address, 'formatAddress');
            valid = valid & check.checkPassword(userCustomer.password, 'formatPassword');
            valid = valid & check.checkEmpty(userCustomer.nameCompany, 'notCompany') // check.checkName(userCustomer.nameCompany,'NameCompany','Tên Công ty')
            valid = valid & check.checkBill(userCustomer.bill, 'formatBil');

        }
        if (!valid) {
            return;
        }
        listPerson.addPerson(userCustomer);//push vô listPerson

    }


    listPerson.renderTable('#tableDanhSach');
    //lưu listPerson
    listPerson.saveLocalStrage();
}

window.deleteOb = function (code) {//xóa người dùng
    listPerson.deleteObject(code);
    //lưu listPerson
    listPerson.saveLocalStrage();
    listPerson.renderTable('#tableDanhSach');
}

window.editOb = function (code) {// lấy thông tin hiện lên modal

    document.getElementById('code').disabled = true;
    document.getElementById('addUser').disabled = true;
    document.getElementById('userType').disabled = true;

    let objectInfo = listPerson.getOb(code);
    if (objectInfo.userType === 'Học Viên') {
        let studentInfo = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classStudent .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType')

        for (let input of studentInfo) {
            let { id } = input;
            input.value = objectInfo[id];
        }
    } else if (objectInfo.userType === 'Nhân Viên') {
        let employeeInfo = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classEmployee .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');
        for (let input of employeeInfo) {
            let { id } = input;
            input.value = objectInfo[id];
        }
    } else {
        objectInfo.userType === 'Khách Hàng';
        let customerInfo = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classCustomer .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');
        for (let input of customerInfo) {
            let { id } = input;
            input.value = objectInfo[id];
        }
    }

}

document.getElementById('editUser').onclick = function () {//cập nhật thông tin
    let userType = document.getElementById('userType').value;
    let valid = true;

    if (userType === 'Học Viên') {
        document.getElementById('userType').onclick();
        let studentEdit = new Student();
        let arrStudent = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classStudent .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrStudent) {
            let { id, value } = input;
            studentEdit[id] = value;

            valid = check.checkAcc(studentEdit.code, 'formatIDUser');
            valid = valid & check.checkName(studentEdit.name, 'formatName', 'Họ tên') & check.checkEmpty(studentEdit.name, 'notName');
            valid = valid & check.checkEmail(studentEdit.email, 'formatEmail');
            valid = valid & check.checkAddress(studentEdit.address, 'formatAddress');
            valid = valid & check.checkPassword(studentEdit.password, 'formatPassword');
            valid = valid & check.checkNum(studentEdit.math, 'formatMath') & check.checkNum(studentEdit.physics, 'formatPhy') & check.checkNum(studentEdit.chemistry, 'formatChem');
        }
        if (!valid) {
            return;
        }
        listPerson.updateUser(studentEdit);
    } else if (userType === 'Nhân Viên') {
        let employeeEdit = new Employee();

        let arrEmpLoyee = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classEmployee .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrEmpLoyee) {
            let { id, value } = input;
            employeeEdit[id] = value;

            valid = check.checkAcc(employeeEdit.code, 'formatIDUser');
            valid = valid & check.checkName(employeeEdit.name, 'formatName', 'Họ tên') & check.checkEmpty(employeeEdit.name, 'notName');
            valid = valid & check.checkEmail(employeeEdit.email, 'formatEmail');
            valid = valid & check.checkAddress(employeeEdit.address, 'formatAddress');
            valid = valid & check.checkPassword(employeeEdit.password, 'formatPassword');
            valid = valid & check.checkDayWord(employeeEdit.workday, 'formatWorkday');
            valid = valid & check.checkMoney(employeeEdit.daymoney, 'formatDayMoney')
        }
        if (!valid) {
            return;
        }
        listPerson.updateUser(employeeEdit);

    } else {
        userType === 'Khách Hàng';
        let customerEdit = new Customer();
        let arrCustomer = document.querySelectorAll('.modal-body #form-main .form-group .input-group input,.modal-body #classCustomer .form-group .input-group input,.modal-body #form-main .form-group .input-group #userType');

        for (let input of arrCustomer) {
            let { id, value } = input;
            customerEdit[id] = value;

            valid = check.checkAcc(customerEdit.code, 'formatIDUser');
            valid = valid & check.checkName(customerEdit.name, 'formatName', 'Họ tên') & check.checkEmpty(customerEdit.name, 'notName');
            valid = valid & check.checkEmail(customerEdit.email, 'formatEmail');
            valid = valid & check.checkAddress(customerEdit.address, 'formatAddress');
            valid = valid & check.checkPassword(customerEdit.password, 'formatPassword');
            valid = valid & check.checkEmpty(customerEdit.nameCompany, 'notCompany') // check.checkName(customerEdit.nameCompany,'NameCompany','Tên Công ty')
            valid = valid & check.checkBill(customerEdit.bill, 'formatBil');
        }
        if (!valid) {
            return;
        }
        listPerson.updateUser(customerEdit);
    }

    listPerson.renderTable('#tableDanhSach');
    listPerson.saveLocalStrage();

    document.getElementById('code').disabled = false;
    document.getElementById('addUser').disabled = false;
    document.getElementById('userType').disabled = false;

}

document.getElementById('searchName').oninput = function () {

    let key = document.getElementById('searchName').value;
    key = stringToslug(key);
    let i = listPerson.searchUser();
    var arrSearch = [];
    console.log('key', i)
    for (let index = 0; index < i.length; index++) {
        let value = i[index];
        let typeUsers = stringToslug(value.userType);
        if (typeUsers.search(key) !== -1) {

            arrSearch.push(value);
        }

    }
    console.log('a', arrSearch)

    //     for (let item in arrSearch) {

    //         if (arrSearch[item].userType === 'Học Viên') {
    //         // listPerson.renderStudent('#tableDanhSach');
    //         } else if (arrSearch[item].userType === 'Nhân Viên') {
    //         //  listPerson.renderEmployee('#tableDanhSach');
    //         } else {
    //             arrSearch[item].userType === 'Khách Hàng';
    //             // listPerson.renderEmployee('#tableDanhSach');
    //         }

    //     }
    //chịu chết

}