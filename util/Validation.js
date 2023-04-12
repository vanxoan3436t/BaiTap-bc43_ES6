export class Validations {

    checkEmpty(value, seclectorBody) {//kiểm tra không để input bị trống
        if (value.trim() === '') {
            document.getElementById(seclectorBody).innerHTML = `Không để trống`;
            return false;
        }
        document.getElementById(seclectorBody).innerHTML = '';
        return true;
    }

    checkAcc(value, idError) {//Kiểm tra tài khoản
        var regexNumber = /^[0-9]{3,6}$/;
        if (regexNumber.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
            document.getElementById(idError).innerHTML = `Tài khoản từ 3 - 6 ký số !`;
        return false;
        
    }

    checkName(value, idError,name) {//kiểm tra Tên dùng cho cả tiếng Việt
        var regexLetter = /^[A-Z a-z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} phải là chữ !`;
        return false;
    }

    checkEmail(value, idError) {//kiểm tra email
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regexEmail.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `Email phải đúng định dạng !`;
        return false;
    }

    checkAddress(value, idError) {//kiểm tra Tên dùng cho cả tiếng Việt

        var regexLetter = /^[0-9A-Z a-z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{15,}$/;
        if (regexLetter.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `Địa chỉ phải đúng định dạng !`;
        return false;
    }

    checkPassword = function (value, idError) {//kiểm tra mật khẩu
        var regexPassword = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{6,}$/;
        if (regexPassword.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `từ 6 ký tự (chứa ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
        return false;
    }

    checkNum(value, seclectorBody) {//Kiểm tra điểm số

        let regexNumber = /^[0-9]{1,2}$/;
        if (regexNumber.test(value) && value <= 10) {
            document.getElementById(seclectorBody).innerHTML = '';
            return true;
        } else {
            value > 10;
            document.getElementById(seclectorBody).innerHTML = `điểm chỉ từ 0 - 10 !`;
            return false;
        }

    }

    checkMoney(value, idError) {//Kiểm tra lương
        var min = 1e+6;
        var max = 20E+6;
        if (value < min || value > max) {
            document.getElementById(idError).innerHTML = ` từ 1 000 000 - 20 000 000`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }

    checkDayWord(value ,idError){
        if(value < 1 || value > 30){
            document.getElementById(idError).innerHTML = `Nhập đúng số ngày quy định !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }

    checkBill(value,idError){
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `Nhập đúng số !`;
        return false;
    }
}
